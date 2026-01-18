import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-300">
      <div className="container mx-auto px-4 py-20 text-center">
        <div className="relative mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full border-4 border-dashed border-purple-900/30">
          <span className="text-5xl font-bold text-purple-900">S</span>
        </div>
        <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl">Swap the world of stablecoins!</h1>
        <p className="mb-8 text-xl text-white/90">
          Convert your USDC or USDT stablecoins across multiple chains
        </p>
        <Button size="lg" className="bg-yellow-400 text-purple-900 hover:bg-yellow-500">
          Connect Wallet
        </Button>
      </div>
    </div>
  )
}

