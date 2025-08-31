import '../styles/globals.css'
import { Montserrat, Plus_Jakarta_Sans } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
const display = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })

export default function App({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} ${display.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
