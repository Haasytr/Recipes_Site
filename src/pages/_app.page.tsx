import Header from '@/components/header'
import { globalStyles } from '@/styles/global'
import { AppProps } from 'next/app'

globalStyles()
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}
