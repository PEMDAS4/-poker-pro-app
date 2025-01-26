import Header from "../components/Header"
import Footer from "../components/Footer"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Bienvenido a Poker Pro</h1>
          <p className="text-xl text-center mb-8">Mejora tu juego con nuestras herramientas y recursos de póker</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Calculadora de Equity</h2>
              <p className="mb-4">Calcula tus probabilidades de ganar en cualquier situación.</p>
              <Link href="/calculadora" className="text-blue-600 hover:underline">
                Ir a la calculadora
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Herramienta de Rangos</h2>
              <p className="mb-4">Utiliza nuestra herramienta interactiva de rangos de manos.</p>
              <Link href="/herramienta" className="text-blue-600 hover:underline">
                Ir a la herramienta
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Herramienta Futura 1</h2>
              <p className="mb-4">Próximamente: Una nueva herramienta para mejorar tu juego.</p>
              <Link href="#" className="text-gray-400 cursor-not-allowed">
                Próximamente
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4">Herramienta Futura 2</h2>
              <p className="mb-4">Próximamente: Otra herramienta innovadora para póker.</p>
              <Link href="#" className="text-gray-400 cursor-not-allowed">
                Próximamente
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-600">
            <p>Selecciona una herramienta para comenzar a mejorar tu juego de póker</p>
            <p className="mt-2">Rojo = Alta prioridad | Azul = Media prioridad | Verde = Baja prioridad</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

