import { Hero } from "@/components/hero"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-purple-900">Exchange Crypto</h2>
          <iframe
            id='iframe-widget'
            src='https://changenow.io/embeds/exchange-widget/v2/widget.html?FAQ=true&amount=100&amountFiat&backgroundColor=FFFFFF&darkMode=false&from=usdtmatic&horizontal=false&isFiat=false&lang=en-US&link_id=cb4c4a839c46d4&locales=true&logo=false&primaryColor=00C26F&to=usdcmatic&toTheMoon=false'
            style={{ height: '356px', width: '100%', border: 'none' }}
          />
          <script defer type='text/javascript' src='https://changenow.io/embeds/exchange-widget/v2/stepper-connector.js'></script>
        </div>
      </div>
      <footer className="border-t border-purple-100 py-10">
        <div className="container mx-auto flex items-center justify-center gap-6 px-4">
          <a
            href="https://github.com/stablecoins"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-purple-900 transition-colors hover:text-purple-600"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/company/stablecoin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-purple-900 transition-colors hover:text-purple-600"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="mailto:email@stablecoins.org"
            aria-label="Email"
            className="text-purple-900 transition-colors hover:text-purple-600"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </footer>
    </main>
  )
}

