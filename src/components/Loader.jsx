import { useLoader } from '../hooks/useLoader'
import logo from '../assets/images/logo.png'

export default function Loader() {
  const isLoading = useLoader()

  return (
    <div
      id="loader"
      aria-hidden="true"
      className={isLoading ? '' : 'hide'}
    >
      <div className="relative flex items-center justify-center">
        <svg className="absolute w-36 h-36 -rotate-90" viewBox="0 0 120 120">
          <circle cx="60" cy="60" r="52" fill="none" stroke="#F0D7CF" strokeWidth="2" />
          <circle
            className="loader-ring"
            cx="60"
            cy="60"
            r="52"
            fill="none"
            stroke="#C6A15B"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
        <img src={logo} alt="Tolu the Shopper" className="w-24 h-24 rounded-full shadow-gold" />
      </div>
    </div>
  )
}
