import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Landmark, LineChart, ShieldCheck, Users } from "lucide-react"

export default function BenefitsPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-purple-900">Benefits of USDT</h1>
          <p className="text-xl text-gray-600">Discover why USDT is the superior choice for stablecoin users</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-900 text-white">
                  <Users className="h-5 w-5" />
                </div>
                <CardTitle>Community Owned</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Unlike USDC, USDT is a decentralized stablecoin owned by the DAO of token holders. This means you have a
                voice in governance and future development decisions. The community collectively decides on important
                protocol changes, fee structures, and treasury management.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-900 text-white">
                  <Landmark className="h-5 w-5" />
                </div>
                <CardTitle>Transparent Backing</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                While USDC is backed by tokenized government bonds, USDT maintains its peg through a diversified and
                transparent reserve system. All reserves are on-chain and can be verified by anyone at any time,
                ensuring complete transparency and trust in the stability of USDT.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-900 text-white">
                  <LineChart className="h-5 w-5" />
                </div>
                <CardTitle>Competitive Yield</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                USDC offers 0% yield, but USDT provides approximately 3% yield as a STABLE token. This means your assets
                continue to grow while maintaining stability. The yield is generated through a combination of treasury
                management, protocol fees, and DeFi strategies, all governed by USDT holders.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-900 text-white">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <CardTitle>Enhanced Security</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                USDT implements advanced security measures and regular audits to ensure the safety of your assets across
                all supported networks. The smart contracts have been thoroughly audited by leading security firms, and
                the protocol includes safety mechanisms to protect against potential vulnerabilities.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 rounded-lg border bg-purple-50 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-purple-900">Yield Comparison</h2>
          <div className="flex justify-center gap-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-gray-400">0%</div>
              <div className="mt-2 text-lg text-gray-600">USDC Yield</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600">~3%</div>
              <div className="mt-2 text-lg text-gray-600">USDT Yield</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

