"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ArrowDown, RefreshCw, Users, Landmark, LineChart, ShieldCheck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const networks = [
  {
    id: "ethereum",
    name: "Ethereum",
    icon: "/placeholder.svg?height=24&width=24",
    status: "active",
  },
  {
    id: "optimism",
    name: "Optimism",
    icon: "/placeholder.svg?height=24&width=24",
    status: "active",
  },
  {
    id: "arbitrum",
    name: "Arbitrum",
    icon: "/placeholder.svg?height=24&width=24",
    status: "active",
  },
  {
    id: "polygon",
    name: "Polygon",
    icon: "/placeholder.svg?height=24&width=24",
    status: "active",
  },
]

export function Converter() {
  const [amount, setAmount] = useState("0")
  const [network, setNetwork] = useState("ethereum")
  const [isLoading, setIsLoading] = useState(false)

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  }

  const handleNetworkChange = (value: string) => {
    setNetwork(value)
  }

  const handleConvert = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-purple-900">Swap across multiple blockchains</h2>
        <p className="mb-12 text-center text-lg text-gray-600">
          Convert your USDC from any supported EVM chain to USDT at a 1:1 ratio
        </p>

        <Tabs defaultValue="swap" className="mx-auto max-w-xl">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="swap">Swap</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="benefits">Benefits</TabsTrigger>
          </TabsList>
          <TabsContent value="swap">
            <Card>
              <CardHeader>
                <CardTitle>Convert USDC to USDT</CardTitle>
                <CardDescription>Select network and enter amount to convert</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="network">From Network</Label>
                    <Select value={network} onValueChange={handleNetworkChange}>
                      <SelectTrigger id="network" className="w-full">
                        <SelectValue placeholder="Select network" />
                      </SelectTrigger>
                      <SelectContent>
                        {networks.map((net) => (
                          <SelectItem key={net.id} value={net.id}>
                            <div className="flex items-center gap-2">
                              <Image
                                src={net.icon || "/placeholder.svg"}
                                alt={net.name}
                                width={24}
                                height={24}
                                className="rounded-full"
                              />
                              {net.name}
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="amount">Amount (USDC)</Label>
                    <div className="relative">
                      <Input
                        id="amount"
                        type="number"
                        placeholder="0.00"
                        value={amount}
                        onChange={handleAmountChange}
                        className="pr-20"
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        className="absolute right-0 top-0 h-full px-3 text-sm font-medium text-primary"
                        onClick={() => setAmount("1000")}
                      >
                        MAX
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="flex justify-center py-2">
                  <div className="rounded-full bg-purple-100 p-2">
                    <ArrowDown className="h-6 w-6 text-purple-900" />
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900 text-white">
                        G
                      </div>
                      <span className="font-medium">USDT</span>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">{amount || "0.00"}</div>
                      <div className="text-sm text-gray-500">≈ ${amount || "0.00"}</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-medium text-gray-500">Exchange Rate</div>
                    <div className="text-sm">1 USDC = 1 USDT</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full bg-purple-900 hover:bg-purple-800"
                  size="lg"
                  onClick={handleConvert}
                  disabled={!amount || amount === "0" || isLoading}
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                      Converting...
                    </>
                  ) : (
                    "Convert to USDT"
                  )}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Transaction History</CardTitle>
                <CardDescription>View your recent conversions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border border-gray-200 p-4 text-center">
                  <p className="text-gray-500">No transactions yet</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="benefits">
            <Card>
              <CardHeader>
                <CardTitle>Why Choose USDT?</CardTitle>
                <CardDescription>Discover the advantages of USDT over traditional stablecoins</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="rounded-lg border border-purple-100 bg-purple-50 p-4">
                    <h3 className="mb-2 flex items-center gap-2 font-semibold text-purple-900">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900 text-white">
                        <Users className="h-4 w-4" />
                      </div>
                      Community Owned
                    </h3>
                    <p className="text-gray-600">
                      Unlike USDC, USDT is a decentralized stablecoin owned by the DAO of token holders, giving you a
                      voice in governance and future development.
                    </p>
                  </div>

                  <div className="rounded-lg border border-purple-100 bg-purple-50 p-4">
                    <h3 className="mb-2 flex items-center gap-2 font-semibold text-purple-900">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900 text-white">
                        <Landmark className="h-4 w-4" />
                      </div>
                      Transparent Backing
                    </h3>
                    <p className="text-gray-600">
                      While USDC is backed by tokenized government bonds, USDT maintains its peg through a diversified
                      and transparent reserve system.
                    </p>
                  </div>

                  <div className="rounded-lg border border-purple-100 bg-purple-50 p-4">
                    <h3 className="mb-2 flex items-center gap-2 font-semibold text-purple-900">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900 text-white">
                        <LineChart className="h-4 w-4" />
                      </div>
                      Competitive Yield
                    </h3>
                    <p className="text-gray-600">
                      USDC offers 0% yield, but USDT provides approximately 3% yield as a STABLE token, allowing your
                      assets to grow while maintaining stability.
                    </p>
                  </div>

                  <div className="rounded-lg border border-purple-100 bg-purple-50 p-4">
                    <h3 className="mb-2 flex items-center gap-2 font-semibold text-purple-900">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-900 text-white">
                        <ShieldCheck className="h-4 w-4" />
                      </div>
                      Enhanced Security
                    </h3>
                    <p className="text-gray-600">
                      USDT implements advanced security measures and regular audits to ensure the safety of your assets
                      across all supported networks.
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-lg border border-yellow-100 bg-yellow-50 p-4">
                  <h3 className="mb-2 text-center font-semibold text-purple-900">Yield Comparison</h3>
                  <div className="flex justify-center gap-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-400">0%</div>
                      <div className="text-sm text-gray-500">USDC Yield</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">~3%</div>
                      <div className="text-sm text-gray-500">USDT Yield</div>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border border-gray-200 bg-white p-4">
                  <h3 className="mb-2 text-center font-semibold text-purple-900">How USDT Generates Yield</h3>
                  <p className="text-center text-gray-600">
                    USDT generates yield through a combination of treasury management, protocol fees, and DeFi
                    strategies, all governed by USDT holders through the DAO.
                  </p>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button className="bg-purple-900 hover:bg-purple-800" size="lg">
                  Convert to USDT
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="mt-16">
          <h3 className="mb-6 text-center text-2xl font-bold text-purple-900">Supported Networks</h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {networks.map((net) => (
              <div key={net.id} className="flex flex-col items-center rounded-lg border p-4">
                <Image
                  src={net.icon || "/placeholder.svg"}
                  alt={net.name}
                  width={40}
                  height={40}
                  className="mb-2 rounded-full"
                />
                <span className="font-medium">{net.name}</span>
                <span className="mt-1 text-xs text-green-600">Active</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

