import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-purple-900 text-white">
              <span className="text-lg font-bold">S</span>
            </div>
            <span className="text-xl font-bold text-purple-900">stablecoin.org</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex">
            Connect Wallet
          </Button>
          <Button size="sm" className="bg-purple-900 hover:bg-purple-800">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  )
}

