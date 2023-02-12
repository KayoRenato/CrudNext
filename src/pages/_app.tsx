import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import { CustomerProvider } from '../backend/context/useCustomerContext'


export default function App({ Component, pageProps }: AppProps) {
  return (
    <CustomerProvider>
      <Component {...pageProps} />
    </CustomerProvider>
  )
}
