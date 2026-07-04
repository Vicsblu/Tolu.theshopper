import { useEffect, useState } from 'react'

/**
 * True while the loading screen should be shown. Hides 500ms after the
 * window `load` event (matching the original), with a 2200ms hard
 * fallback in case `load` fires oddly or very late.
 */
export function useLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let hideTimeout

    function handleLoad() {
      hideTimeout = setTimeout(() => setIsLoading(false), 500)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
    }

    const fallback = setTimeout(() => setIsLoading(false), 2200)

    return () => {
      window.removeEventListener('load', handleLoad)
      clearTimeout(hideTimeout)
      clearTimeout(fallback)
    }
  }, [])

  return isLoading
}
