export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b border-gray-800">

      <h1 className="text-2xl font-bold text-[#9400D3]">
        CogniCore
      </h1>

      <div className="flex gap-8 text-gray-300">

        <a href="#home" className="hover:text-[#9400D3]-400">
          Home
        </a>

        <a href="#about" className="hover:text-400">
          About
        </a>

        <a href="#products" className="hover:text-cyan-400">
          Products
        </a>

        <a href="#research" className="hover:text-cyan-400">
          Research
        </a>

        <a href="#company" className="hover:text-cyan-400">
          Company
        </a>

        <a href="#contact" className="hover:text-cyan-400">
          Contact
        </a>

      </div>

    </nav>
  );
}