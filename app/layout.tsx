import type React from "react"
import { Navbar } from "@/components/navbar"
import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"

export const metadata = {
  title: "Stablecoin.org - USDC to USDT Converter",
  description: "Convert your USDC or USDT stablecoins across multiple chains",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

