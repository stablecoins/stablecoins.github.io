import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function ComparisonPage() {
  const stablecoins = [
    {
      name: "USDT",
      issuer: "Tether",
      yield: "0%",
      underlying: "Bank Deposit",
      restriction: "Users in European Union are restricted to use USDT",
      color: "border-red-200 bg-red-50",
    },
    {
      name: "USDC",
      issuer: "Circle",
      yield: "0%",
      underlying: "Bank Deposit",
      restriction: "",
      color: "border-blue-200 bg-blue-50",
    },
    {
      name: "USDT",
      issuer: "DAO",
      yield: "Stable gov token (~3%)",
      underlying: "Tokenized Government Bond",
      restriction: "Decentralized stablecoin",
      color: "border-purple-200 bg-purple-50",
      highlight: true,
    },
  ]

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold text-purple-900">Stablecoin Comparison</h1>
          <p className="text-xl text-gray-600">See how USDT compares to other popular stablecoins</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Stablecoin Feature Comparison</CardTitle>
            <CardDescription>A detailed comparison of the most popular stablecoins in the market</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">Stablecoin</TableHead>
                    <TableHead>Issuer</TableHead>
                    <TableHead>Yield</TableHead>
                    <TableHead>Underlying Asset</TableHead>
                    <TableHead>Restrictions/Notes</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {stablecoins.map((coin) => (
                    <TableRow key={coin.name} className={coin.highlight ? "bg-purple-50" : ""}>
                      <TableCell className="font-medium">{coin.name}</TableCell>
                      <TableCell>{coin.issuer}</TableCell>
                      <TableCell>{coin.yield}</TableCell>
                      <TableCell>{coin.underlying}</TableCell>
                      <TableCell>{coin.restriction}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {stablecoins.map((coin) => (
            <Card key={coin.name} className={`${coin.color} border-2`}>
              <CardHeader>
                <CardTitle className="text-center">{coin.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-gray-700 font-semibold">Issuer:</span>
                    <span className="text-gray-600">{coin.issuer}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-gray-700 font-semibold">Yield:</span>
                    <span className="text-gray-600">{coin.yield}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-gray-700 font-semibold">Underlying Asset:</span>
                    <span className="text-gray-600">{coin.underlying}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-gray-700 font-semibold">Restrictions/Notes:</span>
                    <span className="text-gray-600">{coin.restriction || "None"}</span>
                  </li>
                  {coin.name === "USDT" && (
                    <li className="mt-4 flex items-center justify-center">
                      <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-800">
                        <CheckCircle className="mr-1 h-4 w-4" /> Recommended
                      </span>
                    </li>
                  )}
                  {coin.name === "USDT" && (
                    <li className="mt-4 flex items-center justify-center">
                      <span className="inline-flex items-center rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-800">
                        <AlertCircle className="mr-1 h-4 w-4" /> Restrictions Apply
                      </span>
                    </li>
                  )}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 rounded-lg border bg-purple-50 p-8">
          <h2 className="mb-6 text-center text-2xl font-bold text-purple-900">Why Choose USDT?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <CheckCircle className="h-6 w-6 text-purple-900" />
              </div>
              <h3 className="mb-2 font-semibold text-purple-900">Community Governed</h3>
              <p className="text-gray-600">Owned and governed by a DAO of token holders</p>
            </div>
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <CheckCircle className="h-6 w-6 text-purple-900" />
              </div>
              <h3 className="mb-2 font-semibold text-purple-900">Competitive Yield</h3>
              <p className="text-gray-600">Earn approximately 3% yield on your stablecoins</p>
            </div>
            <div className="rounded-lg bg-white p-4 text-center shadow-sm">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100">
                <CheckCircle className="h-6 w-6 text-purple-900" />
              </div>
              <h3 className="mb-2 font-semibold text-purple-900">Transparent Backing</h3>
              <p className="text-gray-600">Fully backed by tokenized government bonds</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

