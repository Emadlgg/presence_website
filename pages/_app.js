import '../styles/globals.css'
import { Montserrat, Plus_Jakarta_Sans } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat' })
// Telegraf no está en Google Fonts. Usamos Plus Jakarta Sans como sustituto visual.
// Si obtienes licencia de Telegraf, puedes cargarla local y reemplazar esta línea.
const display = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-display' })

export default function App({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} ${display.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
