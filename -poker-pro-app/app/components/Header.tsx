import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Poker Pro
        </Link>
        <nav className="flex-grow">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link href="/" className="hover:text-blue-200">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-blue-200">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/formulario" className="hover:text-blue-200">
                Formulario
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

