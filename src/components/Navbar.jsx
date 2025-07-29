const Navbar = () => {
  return (
    <nav className="bg-black fixed w-full z-10">

      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
       
        <div className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          Portofolio
        </div>

        
        <ul className="flex space-x-6 text-white font-medium">
          <li>
            <a href="#home" className="hover:text-cyan-400 transition">Beranda</a>
          </li>
          <li>
            <a href="#about" className="hover:text-cyan-400 transition">Tentang Saya</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-cyan-400 transition">Project</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-cyan-400 transition">Keterampilan</a>
          </li>
          <li>
            <a href="#education" className="hover:text-cyan-400 transition">Pendidikan</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-cyan-400 transition">Kontak</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
