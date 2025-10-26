import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Phone } from "lucide-react"
import HubspotForm from "@/components/hubspot-form"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-900 to-blue-800 py-24 md:py-32">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6">
              Get ready to defer capital gains.
            </h1>
            <p className="text-xl text-sky-100 mb-8">
              We are ready to help you defer taxes on your next real estate sale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-500 hover:bg-blue-600 text-white font-medium">
                <Link href="#contact">Start Your Exchange</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white/10"
              >
                <Link href="#about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">MAXIMIZE 1031</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-700 mb-6">
              At Maximize 1031, we specialize in helping real estate investors defer capital gains taxes through 1031
              exchanges.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We ensure that your exchange complies with IRS regulations, allowing you
              to defer your capital gains taxes and maximize your investment potential.
            </p>
            <div className="text-center">
              <Button asChild className="bg-blue-500 hover:bg-blue-600 text-white">
                <Link href="#contact">Work With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-sky-50">
        <div className="container px-4 md:px-6 mx-auto">
     

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <HubspotForm />

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Phone className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">(818) 482-2707</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:info@maximize1031.com" className="text-blue-500 hover:underline">
                        info@maximize1031.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-blue-500 mt-1 mr-3" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600">
                        2108 N ST STE N<br />
                        Sacramento, CA 95816
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Service Areas</h3>
                <p className="text-gray-600 mb-4">
                  We provide 1031 exchange services throughout California, with a focus on:
                </p>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Los Angeles
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    San Francisco
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    San Diego
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Sacramento
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Orange County
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    Bay Area
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
