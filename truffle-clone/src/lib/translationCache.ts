import type { Language, Translations } from './translations'

interface CacheEntry {
  data: Translations
  timestamp: number
  accessCount: number
  lastAccessed: number
}

interface CacheStats {
  hits: number
  misses: number
  evictions: number
  totalRequests: number
  avgLoadTime: number
  cacheSize: number
  memoryUsage: number
}

/**
 * Advanced translation cache with LRU eviction and performance monitoring
 */
export class TranslationCache {
  private cache = new Map<Language, CacheEntry>()
  private maxSize: number
  private maxAge: number // in milliseconds
  private stats: CacheStats

  constructor(maxSize = 10, maxAge = 30 * 60 * 1000) { // 30 minutes default
    this.maxSize = maxSize
    this.maxAge = maxAge
    this.stats = {
      hits: 0,
      misses: 0,
      evictions: 0,
      totalRequests: 0,
      avgLoadTime: 0,
      cacheSize: 0,
      memoryUsage: 0
    }

    // Periodic cleanup
    this.scheduleCleanup()
  }

  /**
   * Get translation from cache
   */
  get(language: Language): Translations | null {
    this.stats.totalRequests++

    const entry = this.cache.get(language)

    if (!entry) {
      this.stats.misses++
      return null
    }

    // Check if expired
    if (Date.now() - entry.timestamp > this.maxAge) {
      this.cache.delete(language)
      this.stats.misses++
      this.stats.evictions++
      return null
    }

    // Update access statistics
    entry.accessCount++
    entry.lastAccessed = Date.now()
    this.stats.hits++

    return entry.data
  }

  /**
   * Set translation in cache with LRU eviction
   */
  set(language: Language, translation: Translations): void {
    const now = Date.now()

    // Check if we need to evict
    if (this.cache.size >= this.maxSize && !this.cache.has(language)) {
      this.evictLRU()
    }

    const entry: CacheEntry = {
      data: translation,
      timestamp: now,
      accessCount: 1,
      lastAccessed: now
    }

    this.cache.set(language, entry)
    this.updateStats()
  }

  /**
   * Check if translation is cached and valid
   */
  has(language: Language): boolean {
    const entry = this.cache.get(language)
    if (!entry) return false

    // Check if expired
    if (Date.now() - entry.timestamp > this.maxAge) {
      this.cache.delete(language)
      this.stats.evictions++
      return false
    }

    return true
  }

  /**
   * Evict least recently used entry
   */
  private evictLRU(): void {
    let lruKey: Language | null = null
    let oldestAccess = Date.now()

    for (const [key, entry] of this.cache.entries()) {
      if (entry.lastAccessed < oldestAccess) {
        oldestAccess = entry.lastAccessed
        lruKey = key
      }
    }

    if (lruKey) {
      this.cache.delete(lruKey)
      this.stats.evictions++
    }
  }

  /**
   * Clean up expired entries
   */
  private cleanup(): void {
    const now = Date.now()
    let evicted = 0

    for (const [key, entry] of this.cache.entries()) {
      if (now - entry.timestamp > this.maxAge) {
        this.cache.delete(key)
        evicted++
      }
    }

    this.stats.evictions += evicted
    this.updateStats()
  }

  /**
   * Schedule periodic cleanup
   */
  private scheduleCleanup(): void {
    setInterval(() => {
      this.cleanup()
    }, 5 * 60 * 1000) // Every 5 minutes
  }

  /**
   * Update cache statistics
   */
  private updateStats(): void {
    this.stats.cacheSize = this.cache.size

    // Estimate memory usage (rough calculation)
    let memoryUsage = 0
    for (const entry of this.cache.values()) {
      memoryUsage += JSON.stringify(entry.data).length * 2 // Rough Unicode byte size
    }
    this.stats.memoryUsage = memoryUsage
  }

  /**
   * Get cache statistics
   */
  getStats(): CacheStats {
    const hitRate = this.stats.totalRequests > 0
      ? (this.stats.hits / this.stats.totalRequests) * 100
      : 0

    return {
      ...this.stats,
      hitRate: Number(hitRate.toFixed(2))
    } as CacheStats & { hitRate: number }
  }

  /**
   * Get cached languages
   */
  getCachedLanguages(): Language[] {
    return Array.from(this.cache.keys())
  }

  /**
   * Preload specific languages
   */
  async preload(languages: Language[], loader: (lang: Language) => Promise<Translations>): Promise<void> {
    const promises = languages.map(async (lang) => {
      if (!this.has(lang)) {
        try {
          const translation = await loader(lang)
          this.set(lang, translation)
        } catch (error) {
          console.warn(`Failed to preload language ${lang}:`, error)
        }
      }
    })

    await Promise.allSettled(promises)
  }

  /**
   * Clear all cache
   */
  clear(): void {
    this.cache.clear()
    this.stats = {
      hits: 0,
      misses: 0,
      evictions: 0,
      totalRequests: 0,
      avgLoadTime: 0,
      cacheSize: 0,
      memoryUsage: 0
    }
  }

  /**
   * Get cache size in entries
   */
  size(): number {
    return this.cache.size
  }

  /**
   * Get estimated memory usage in bytes
   */
  getMemoryUsage(): number {
    return this.stats.memoryUsage
  }
}

// Export singleton instance
export const translationCache = new TranslationCache()
