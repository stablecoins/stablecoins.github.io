import { Hero } from "@/components/hero"

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
    </main>
  )
}

