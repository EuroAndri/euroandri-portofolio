const Education = () => {
  return (
    <section id="education" className="py-20 bg-black" data-aos="fade-up">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Pendidikan
        </h2>

        
        <div className="flex flex-col sm:flex-row items-center bg-gray-900 rounded-2xl shadow-2xl p-8 mb-10 gap-8 text-left">
          <img
            src="/images/uksw.jpg"
            alt="Logo UKSW"
            className="w-45 h-44 object-contain rounded-xl"
          />
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Universitas Kristen Satya Wacana</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Kuliah di Universitas Kristen Satya Wacana, Salatiga sejak tahun 2022 hingga sekarang. Dikenal dengan lingkungan akademik yang dinamis dan suportif.
            </p>
          </div>
        </div>

        
        <div className="flex flex-col sm:flex-row items-center bg-gray-900 rounded-2xl shadow-2xl p-8 gap-8 text-left">
          <img
            src="/images/fti.jpg"
            alt="Logo FTI"
            className="w-53 h-40 object-contain rounded-xl"
          />
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Fakultas Teknologi Informasi</h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Program Studi Teknik Informatika yang menekankan pada pengembangan aplikasi, sistem informasi, dan inovasi teknologi digital.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
