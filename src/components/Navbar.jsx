import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black w-full">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Portofolio
        </div>

        {/* Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            ☰
          </button>
        </div>

        {/* Navigation Links */}
        <ul
  className={`${
    isOpen ? "block" : "hidden"
  } md:flex md:space-x-6 mt-4 md:mt-0 text-white font-medium`}
>
  <li className="mt-2 md:mt-0">
    <a href="#home" className="hover:text-cyan-400 transition block text-center md:inline">Beranda</a>
  </li>
  <li className="mt-2 md:mt-0">
    <a href="#about" className="hover:text-cyan-400 transition block text-center md:inline">Tentang Saya</a>
  </li>
  <li className="mt-2 md:mt-0">
    <a href="#projects" className="hover:text-cyan-400 transition block text-center md:inline">Project</a>
  </li>
  <li className="mt-2 md:mt-0">
    <a href="#skills" className="hover:text-cyan-400 transition block text-center md:inline">Keterampilan</a>
  </li>
  <li className="mt-2 md:mt-0">
    <a href="#education" className="hover:text-cyan-400 transition block text-center md:inline">Pendidikan</a>
  </li>
  <li className="mt-2 md:mt-0">
    <a href="#contact" className="hover:text-cyan-400 transition block text-center md:inline">Kontak</a>
  </li>
</ul>
      </div>
    </nav>
  );
};

export default Navbar;
