import { useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'tolu-theme'

function getInitialTheme() {
  if (typeof window === 'undefined') return false
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'dark') return true
    if (stored === 'light') return false
  } catch {
    // localStorage unavailable (private browsing, etc.) — fall through to system preference
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false
}

/**
 * Dark/light mode, persisted to localStorage and applied as a `dark`
 * class on <html> (matches the Tailwind `darkMode: 'class'` strategy).
 *
 * The original page kept this in memory only, with a comment noting
 * that a real deployment should persist it — this is that persistence.
 * index.html also runs a tiny inline script that applies the same
 * class before React mounts, so there's no flash of the wrong theme.
 */
export function useTheme() {
  const [isDark, setIsDark] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    try {
      localStorage.setItem(STORAGE_KEY, isDark ? 'dark' : 'light')
    } catch {
      // ignore write failures
    }
  }, [isDark])

  const toggleTheme = useCallback(() => setIsDark((prev) => !prev), [])

  return [isDark, toggleTheme]
}
