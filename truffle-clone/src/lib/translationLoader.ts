import type { Language, Translations } from './translations'
import { translationCache } from './translationCache'

// Loading states to prevent duplicate requests
const loadingStates = new Map<Language, Promise<Translations>>()

// Preload commonly used languages
const PRELOAD_LANGUAGES: Language[] = ['en', 'th', 'zh-CN']

/**
 * Dynamic translation loader with caching and performance optimizations
 */
export class TranslationLoader {
  private static instance: TranslationLoader

  static getInstance(): TranslationLoader {
    if (!TranslationLoader.instance) {
      TranslationLoader.instance = new TranslationLoader()
    }
    return TranslationLoader.instance
  }

  /**
   * Load translation with caching and dynamic imports
   */
  async loadTranslation(language: Language): Promise<Translations> {
    const startTime = performance.now()

    // Return cached translation if available
    const cached = translationCache.get(language)
    if (cached) {
      return cached
    }

    // Return ongoing loading promise if already loading
    if (loadingStates.has(language)) {
      return loadingStates.get(language)!
    }

    // Start loading translation
    const loadingPromise = this.dynamicImport(language)
    loadingStates.set(language, loadingPromise)

    try {
      const translation = await loadingPromise

      // Cache the loaded translation
      translationCache.set(language, translation)

      // Remove from loading states
      loadingStates.delete(language)

      // Log performance metrics
      const loadTime = performance.now() - startTime
      console.log(`📊 Translation loaded for ${language} in ${loadTime.toFixed(2)}ms`)

      return translation
    } catch (error) {
      // Remove from loading states on error
      loadingStates.delete(language)
      throw error
    }
  }

  /**
   * Dynamic import with fallback to embedded translations
   */
  private async dynamicImport(language: Language): Promise<Translations> {
    try {
      // For now, we'll use embedded translations but with optimized loading
      const { translations } = await import('./translations')
      return translations[language]
    } catch (error) {
      console.error(`Failed to load translation for ${language}:`, error)
      // Fallback to English
      const { translations } = await import('./translations')
      return translations.en
    }
  }

  /**
   * Preload commonly used languages for better performance
   */
  async preloadCommonLanguages(): Promise<void> {
    const preloadPromises = PRELOAD_LANGUAGES.map(lang =>
      this.loadTranslation(lang).catch(err =>
        console.warn(`Failed to preload ${lang}:`, err)
      )
    )

    await Promise.allSettled(preloadPromises)
  }

  /**
   * Check if translation is cached
   */
  isCached(language: Language): boolean {
    return translationCache.has(language)
  }

  /**
   * Check if translation is currently loading
   */
  isLoading(language: Language): boolean {
    return loadingStates.has(language)
  }

  /**
   * Get cached translation synchronously (returns null if not cached)
   */
  getCached(language: Language): Translations | null {
    return translationCache.get(language)
  }

  /**
   * Clear cache (useful for testing or memory management)
   */
  clearCache(): void {
    translationCache.clear()
    loadingStates.clear()
  }

  /**
   * Get cache statistics
   */
  getCacheStats() {
    const stats = translationCache.getStats()
    return {
      ...stats,
      cached: translationCache.getCachedLanguages(),
      loading: Array.from(loadingStates.keys()),
      memoryUsage: translationCache.getMemoryUsage()
    }
  }

  /**
   * Get detailed performance metrics
   */
  getPerformanceMetrics() {
    return translationCache.getStats()
  }
}

// Export singleton instance
export const translationLoader = TranslationLoader.getInstance()

// Export types for convenience
export type { Language, Translations }
