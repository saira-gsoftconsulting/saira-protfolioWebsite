import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { MotionConfig } from 'framer-motion'; // Optional: Global motion settings

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // You can wrap with MotionConfig for global animation defaults if needed
    // <MotionConfig reducedMotion="user">
      <Component {...pageProps} />
    // </MotionConfig>
  )
}

export default MyApp;