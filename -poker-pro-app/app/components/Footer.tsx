import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Poker Pro</h3>
            <p>Mejora tu juego, domina el póker.</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Enlaces rápidos</h3>
            <ul>
              <li>
                <Link href="/sobre-nosotros" className="hover:text-blue-400">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/terminos" className="hover:text-blue-400">
                  Términos y condiciones
                </Link>
              </li>
              <li>
                <Link href="/privacidad" className="hover:text-blue-400">
                  Política de privacidad
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-bold mb-2">Contáctanos</h3>
            <p>Email: info@pokerpro.com</p>
            <p>Teléfono: +34 681 88 33 76</p>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>&copy; 2025 Poker Pro. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

