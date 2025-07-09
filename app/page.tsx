"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Train,
  Music,
  Users,
  Wine,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Star,
  Download,
  Instagram,
  Ticket,
  PartyPopper,
} from "lucide-react"

export default function RollingEuHomepage() {
  const [currentDestination, setCurrentDestination] = useState(0)

  const destinations = [
    { city: "Milano", country: "Italia", image: "/placeholder.svg?height=200&width=300", price: "€29" },
    { city: "Praga", country: "Repubblica Ceca", image: "/placeholder.svg?height=200&width=300", price: "€35" },
    { city: "Budapest", country: "Ungheria", image: "/placeholder.svg?height=200&width=300", price: "€32" },
    { city: "Berlino", country: "Germania", image: "/placeholder.svg?height=200&width=300", price: "€38" },
    { city: "Vienna", country: "Austria", image: "/placeholder.svg?height=200&width=300", price: "€34" },
    { city: "Amsterdam", country: "Paesi Bassi", image: "/placeholder.svg?height=200&width=300", price: "€42" },
  ]

  const testimonials = [
    {
      name: "Sofia M.",
      age: 22,
      text: "Era il viaggio più assurdo della mia vita! Ho conosciuto persone incredibili e la festa non si è mai fermata!",
      rating: 5,
    },
    {
      name: "Marco L.",
      age: 24,
      text: "Perfetto per noi studenti Erasmus! Economico, divertente e hai già gli amici per la destinazione.",
      rating: 5,
    },
    {
      name: "Emma K.",
      age: 21,
      text: "Il Vagone Party è geniale! Musica, drink e viaggio tutto insieme. Lo rifarei subito!",
      rating: 5,
    },
  ]

  const nextDestination = () => {
    setCurrentDestination((prev) => (prev + 1) % destinations.length)
  }

  const prevDestination = () => {
    setCurrentDestination((prev) => (prev - 1 + destinations.length) % destinations.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-pink-900">
      {/* Header */}
      <header className="relative z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Train className="h-8 w-8 text-pink-400" />
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Rolling.eu
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-white hover:text-pink-400 transition-colors">
              Destinazioni
            </a>
            <a href="#" className="text-white hover:text-pink-400 transition-colors">
              Vagone Party
            </a>
            <a href="#" className="text-white hover:text-pink-400 transition-colors">
              Come funziona
            </a>
            <Button
              variant="outline"
              className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black bg-transparent"
            >
              Accedi
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0 text-lg px-4 py-2">
            🎉 Nuova rotta: Milano → Berlino
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-pink-200 to-purple-200 bg-clip-text text-transparent leading-tight">
            Il tuo viaggio inizia qui.
            <br />
            <span className="text-pink-400">Ma con la musica.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Viaggia di notte attraverso l'Europa con i nostri treni party. Destinazioni incredibili, prezzi imbattibili,
            feste epiche.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white text-xl px-8 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            <PartyPopper className="mr-2 h-6 w-6" />
            Scopri i treni party
          </Button>
        </div>

        {/* Train Illustration */}
        <div className="mt-16 relative">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-96 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg shadow-2xl transform -rotate-2">
                <div className="absolute inset-0 bg-black/20 rounded-lg" />
                <div className="absolute top-2 left-4 right-4 h-4 bg-gradient-to-r from-yellow-400 to-pink-400 rounded opacity-80 animate-pulse" />
                <div className="absolute bottom-2 left-4 right-4 flex justify-between">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                  <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-100" />
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-200" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-300" />
                </div>
              </div>
              <div className="absolute -right-8 top-1/2 transform -translate-y-1/2">
                <Music className="h-8 w-8 text-pink-400 animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Come Funziona */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Come funziona
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 border-purple-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Ticket className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">1. Prenota</h3>
                <p className="text-gray-300">
                  Scegli la tua destinazione e prenota il tuo posto nel Vagone Party. Prezzi da €29!
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 border-blue-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Train className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">2. Viaggia</h3>
                <p className="text-gray-300">
                  Sali a bordo e inizia l'avventura. Viaggi notturni comodi attraverso l'Europa.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-pink-800/50 to-purple-800/50 border-pink-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <PartyPopper className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">3. Festeggia</h3>
                <p className="text-gray-300">
                  Balla, socializza e divertiti nel nostro leggendario Vagone Party fino all'arrivo!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Destinazioni */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Destinazioni
          </h2>
          <div className="relative">
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevDestination}
                className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black bg-transparent"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
                {destinations.slice(currentDestination, currentDestination + 3).map((dest, index) => (
                  <Card
                    key={index}
                    className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 border-purple-500/30 backdrop-blur-sm overflow-hidden group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="relative">
                      <img
                        src={dest.image || "/placeholder.svg"}
                        alt={dest.city}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white border-0">
                          {dest.price}
                        </Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{dest.city}</h3>
                      <p className="text-gray-300 mb-4">{dest.country}</p>
                      <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white">
                        Prenota ora
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextDestination}
                className="border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-black bg-transparent"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vagone Party */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Vagone Party
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Il cuore pulsante di ogni viaggio Rolling.eu. Musica, drink, nuove amicizie e un'atmosfera unica che
              trasforma ogni tragitto in una festa indimenticabile.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 border-purple-500/30 backdrop-blur-sm text-center p-6">
              <Music className="h-12 w-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">DJ Set Live</h3>
              <p className="text-gray-300">Musica non-stop con DJ professionisti</p>
            </Card>

            <Card className="bg-gradient-to-br from-blue-800/50 to-purple-800/50 border-blue-500/30 backdrop-blur-sm text-center p-6">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Social Hub</h3>
              <p className="text-gray-300">Conosci viaggiatori da tutta Europa</p>
            </Card>

            <Card className="bg-gradient-to-br from-pink-800/50 to-purple-800/50 border-pink-500/30 backdrop-blur-sm text-center p-6">
              <Wine className="h-12 w-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Bar a Bordo</h3>
              <p className="text-gray-300">Cocktail e drink a prezzi studente</p>
            </Card>

            <Card className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 border-purple-500/30 backdrop-blur-sm text-center p-6">
              <MessageCircle className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Chat Live</h3>
              <p className="text-gray-300">App dedicata per chattare a bordo</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonianze */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Cosa dicono i viaggiatori
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-purple-800/50 to-pink-800/50 border-purple-500/30 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.age} anni</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scarica l'App */}
      <section className="py-20 px-4 bg-black/20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Scarica l'app Rolling.eu
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Prenota, chatta con altri viaggiatori, accedi ai contenuti esclusivi del Vagone Party e molto altro. Tutto
            dal tuo smartphone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-lg flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <div className="text-left">
                <div className="text-xs">Scarica su</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </Button>
            <Button className="bg-black text-white hover:bg-gray-800 px-8 py-4 rounded-lg flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <div className="text-left">
                <div className="text-xs">Scarica su</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-purple-500/20 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Train className="h-6 w-6 text-pink-400" />
                <span className="text-xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Rolling.eu
                </span>
              </div>
              <p className="text-gray-400">La rivoluzione dei viaggi notturni in Europa. Parti, festeggia, arriva.</p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Supporto</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Contatti
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Assistenza
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Rimborsi
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Azienda</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Lavora con noi
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Chi siamo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                    Termini
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Social</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <div className="h-6 w-6 bg-gradient-to-r from-pink-500 to-purple-500 rounded flex items-center justify-center text-white text-xs font-bold">
                    T
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-500/20 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Rolling.eu - Tutti i diritti riservati.
              <span className="text-pink-400"> Made with ❤️ for young travelers</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
