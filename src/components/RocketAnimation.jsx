import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function RocketAnimation({ className = '' }) {
  return (
    <DotLottieReact
      src="/animations/rocket.lottie"
      loop
      autoplay
      className={className}
      aria-hidden="true"
    />
  )
}
