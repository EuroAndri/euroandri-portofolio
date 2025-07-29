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
          {["Beranda", "Tentang Saya", "Project", "Keterampilan", "Pendidikan", "Kontak"].map(
            (item, i) => (
              <li key={i} className="mt-2 md:mt-0">
                <a
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="hover:text-cyan-400 transition block text-center md:inline"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
