import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Beranda", href: "#beranda" },
    { label: "Tentang Saya", href: "#tentangsaya" },
    { label: "Project", href: "#project" },
    { label: "Keterampilan", href: "#keterampilan" },
    { label: "Pendidikan", href: "#pendidikan" },
    { label: "Kontak", href: "#kontak" },
  ];

  return (
    <nav className="bg-black fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Portofolio
        </div>

        {/* Toggle Button (Mobile Only) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Navigation Links */}
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex md:space-x-6 text-white font-medium absolute md:static bg-black w-full left-0 top-full md:w-auto md:bg-transparent z-50`}
      >
        {navItems.map(({ label, href }, i) => (
          <li key={i} className="mt-2 md:mt-0 text-center md:text-left">
            <a
              href={href}
              className="block px-4 py-2 hover:text-cyan-400 transition"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
