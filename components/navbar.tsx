import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-800">

      <h1 className="text-2xl font-bold text-cyan-400">
        CogniCore
      </h1>

      <div className="flex gap-8 text-gray-300">

        <Link href="/" className="hover:text-cyan-400">
          Home
        </Link>

        <Link href="/products" className="hover:text-cyan-400">
          Products
        </Link>

        <Link href="/research" className="hover:text-cyan-400">
          Research
        </Link>

        <Link href="/company" className="hover:text-cyan-400">
          Company
        </Link>

        <Link href="/contact" className="hover:text-cyan-400">
          Contact
        </Link>

      </div>

    </nav>
  );
}