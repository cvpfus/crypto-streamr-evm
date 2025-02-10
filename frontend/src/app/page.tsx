import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[conic-gradient(at_top_right,_rgb(255,255,255),_rgb(59,130,246,0.4),_rgb(255,255,255))]" />
        <div className="absolute inset-0 bg-[conic-gradient(at_bottom_left,_rgb(255,255,255),_rgb(99,102,241,0.4),_rgb(255,255,255))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgb(255,255,255),_transparent)] opacity-60" />
        <div className="absolute inset-0 backdrop-blur-[100px]" />
        <div className="container mx-auto text-center z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text animate-gradient">
            Empower Your Stream with Crypto
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Real-time crypto tipping platform built on Manta Pacific. Take
            control of your content monetization.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="https://cryptostreamr.xyz/dashboard">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 text-lg px-8 py-6">
                Launch App
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
            Why Choose CryptoStreamr?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Instant Payments",
                description:
                  "Receive tips immediately with 95% revenue share",
                icon: "💸",
              },
              {
                title: "Custom Messages",
                description:
                  "Viewers can send on-screen messages with their tips",
                icon: "💬",
              },
              {
                title: "Full Control",
                description:
                  "Own your revenue stream with decentralized payments",
                icon: "🔐",
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="p-8 bg-white shadow-xl shadow-blue-100 hover:shadow-2xl hover:shadow-blue-200 transition-all duration-300 border-none"
              >
                <h3 className="text-xl font-bold mb-4 text-blue-600 flex gap-2">
                  <span>{feature.icon}</span>
                  <span>{feature.title}</span>
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto text-center">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl shadow-lg shadow-blue-100">
              <h3 className="text-6xl font-bold text-blue-600 mb-2">$712B</h3>
              <p className="text-gray-600 text-lg">Market Size by 2033</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg shadow-blue-100">
              <h3 className="text-6xl font-bold text-blue-600 mb-2">95%</h3>
              <p className="text-gray-600 text-lg">Creator Revenue Share</p>
            </div>
            <div className="p-8 bg-white rounded-2xl shadow-lg shadow-blue-100">
              <h3 className="text-6xl font-bold text-blue-600 mb-2">0</h3>
              <p className="text-gray-600 text-lg">Payment Delays</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,_rgba(37,99,235,0.05)_1px,_transparent_1px)] bg-[length:32px_32px]" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Ready to Transform Your Stream?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the future of content monetization. Start accepting crypto tips
            and engaging with your audience in real-time.
          </p>
          <Link href="https://cryptostreamr.xyz/dashboard">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 text-lg px-8 py-6">
              Launch App
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-100 bg-white">
        <div className="container mx-auto text-center text-gray-500">
          <p>© 2025 CryptoStreamr. Built on Manta Pacific.</p>
        </div>
      </footer>
    </main>
  );
}
