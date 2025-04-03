import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:px-8">
        <div className="flex-1">
          <Image src="/max-logo.svg" alt="Max" width={80} height={30} className="h-8 w-auto" />
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="text-white flex items-center gap-1">
            <Globe className="h-4 w-4" />
            ENGLISH
            <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm" className="text-white">
            SIGN IN
          </Button>
          <Button size="sm" className="bg-white text-black hover:bg-gray-200">
            SIGN UP NOW
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <div className="relative">
        {/* Background Image Grid */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="grid grid-cols-6 h-full">
            {Array(24)
              .fill(0)
              .map((_, i) => (
                <div
                  key={i}
                  className="bg-cover bg-center"
                  style={{ backgroundImage: `url(/placeholder.svg?height=200&width=200)` }}
                ></div>
              ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Must-see series, movies & more.</h1>
          <p className="text-xl mb-12">Choose a Max plan or bundle to start streaming.</p>

          {/* Plans */}
          <div className="w-full max-w-5xl grid md:grid-cols-2 gap-8">
            {/* Max Only Plan */}
            <div className="flex flex-col items-center">
              <Image src="/max-logo.svg" alt="Max" width={160} height={60} className="h-12 w-auto mb-4" />
              <div className="text-center mb-4">
                <div className="text-sm">PLANS START AT</div>
                <div className="flex items-baseline justify-center">
                  <span className="text-sm align-top">$</span>
                  <span className="text-4xl font-bold">9.99</span>
                  <span className="text-sm">/MONTH</span>
                </div>
              </div>
              <Button className="bg-white text-black hover:bg-gray-200 w-full max-w-xs">GET MAX</Button>
            </div>

            {/* Bundle Plan */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-4">
                <Image src="/disney-plus-logo.svg" alt="Disney+" width={80} height={30} className="h-8 w-auto" />
                <Image src="/hulu-logo.svg" alt="Hulu" width={80} height={30} className="h-8 w-auto" />
                <Image src="/max-logo.svg" alt="Max" width={80} height={30} className="h-8 w-auto" />
              </div>
              <div className="text-center mb-4">
                <div className="text-sm">PLANS START AT</div>
                <div className="flex items-baseline justify-center">
                  <span className="text-sm align-top">$</span>
                  <span className="text-4xl font-bold">16.99</span>
                  <span className="text-sm">/MONTH</span>
                </div>
              </div>
              <Button className="bg-white text-black hover:bg-gray-200 w-full max-w-xs">GET THE BUNDLE</Button>
            </div>
          </div>

          {/* Legal Text */}
          <div className="text-xs text-gray-400 mt-8 max-w-4xl text-center">
            U.S. only. Must be 18+. Available only for direct-billed purchases via Disney+, Hulu, and Max. Access
            content from each service separately. Content, feature and device compatibility vary by service. For
            details, including info on billing and cancellation, visit the{" "}
            <Link href="#" className="underline">
              Help/Help Center
            </Link>
            . Use of Disney+, Hulu, and Max are subject to their respective terms and conditions, see each of:{" "}
            <Link href="#" className="underline">
              Disney+ Subscriber Agreement
            </Link>
            ,{" "}
            <Link href="#" className="underline">
              Hulu Subscriber Agreement
            </Link>
            , and
            <Link href="#" className="underline">
              {" "}
              Max Terms of Use
            </Link>
            . ©2023 Disney and its related entities. Max ©2023 Home Box Office, Inc.
          </div>

          <div className="text-xs text-gray-400 mt-4 max-w-4xl text-center">
            By signing up for this bundle, Max will share your email address & subscription details with Disney+ and
            Hulu for eligibility, marketing, and other purposes. For more info about your choices, see the{" "}
            <Link href="#" className="underline">
              Privacy Center
            </Link>
            .
          </div>
        </div>
      </div>

      {/* Plan Selection Section */}
      <div className="py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Find Your Perfect Plan</h2>

        <Tabs defaultValue="bundles" className="max-w-2xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="bundles" className="text-lg py-3">
              MAX BUNDLES
            </TabsTrigger>
            <TabsTrigger value="plans" className="text-lg py-3">
              MAX PLANS
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bundles">
            <div className="grid md:grid-cols-2 gap-6">
              {/* With Ads Bundle */}
              <div className="border border-gray-700 rounded-lg p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src="/disney-plus-logo.svg" alt="Disney+" width={80} height={30} className="h-8 w-auto" />
                    <Image src="/hulu-logo.svg" alt="Hulu" width={80} height={30} className="h-8 w-auto" />
                    <Image src="/max-logo.svg" alt="Max" width={80} height={30} className="h-8 w-auto" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">With Ads</h3>
                <p className="text-sm text-center text-gray-400 mb-4">
                  Max Basic With Ads, Disney+ Basic, and Hulu (With Ads)
                </p>
              </div>

              {/* No Ads Bundle */}
              <div className="border border-gray-700 rounded-lg p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image src="/disney-plus-logo.svg" alt="Disney+" width={80} height={30} className="h-8 w-auto" />
                    <Image src="/hulu-logo.svg" alt="Hulu" width={80} height={30} className="h-8 w-auto" />
                    <Image src="/max-logo.svg" alt="Max" width={80} height={30} className="h-8 w-auto" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">No Ads</h3>
                <p className="text-sm text-center text-gray-400 mb-4">
                  Max Standard, Disney+ Premium, and Hulu (No Ads)
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="plans">
            <div className="text-center p-8 border border-gray-700 rounded-lg">
              <h3 className="text-xl">Max plans starting at $9.99/month</h3>
              <p className="text-gray-400 mt-2">
                Choose between Max Basic with Ads, Max Ad-Free, or Max Ultimate Ad-Free
              </p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

