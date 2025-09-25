// Haptic feedback utility for mobile devices
export const hapticFeedback = {
  // Light haptic feedback for button taps
  light: () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(10);
    }
  },

  // Medium haptic feedback for selections
  medium: () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(25);
    }
  },

  // Strong haptic feedback for confirmations
  heavy: () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(50);
    }
  },

  // Success pattern - double tap
  success: () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate([15, 50, 15]);
    }
  },

  // Error pattern - long vibration
  error: () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate([100, 50, 100]);
    }
  },

  // Selection pattern for dropdowns
  selection: () => {
    if (typeof window !== 'undefined' && 'vibrate' in navigator) {
      navigator.vibrate(20);
    }
  }
};

export default hapticFeedback;
