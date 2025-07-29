import React from 'react';

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-black px-4 font-inter"
    >
      <div
        className="text-center max-w-2xl"
        data-aos="fade-up"
      >
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
          Halo, Saya Euro Andri Setiawan
        </h1>

        
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Saya mahasiswa <span className="font-semibold text-cyan-400">Universitas Kristen Satya Wacana</span>,
          Fakultas <span className="text-blue-400 font-semibold">Teknologi Informasi</span>,
          Prodi <span className="text-indigo-400 font-semibold">Teknik Informatika</span>.
        </p>
      </div>
    </section>
  );
};

export default Home;
