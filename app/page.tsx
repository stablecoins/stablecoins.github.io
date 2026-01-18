import { Converter } from "@/components/converter"
import { Hero } from "@/components/hero"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Converter />
    </main>
  )
}

