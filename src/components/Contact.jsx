const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          Kontak
        </h2>

        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4 bg-gray-900 rounded-xl px-6 py-4 w-full max-w-md shadow-lg">
            <img
              src="/images/email.png" 
              alt="Email Icon"
              className="w-20 h-20 object-contain"
            />
            <p className="text-gray-300 text-lg break-words text-left">
              euroandrisetyawan@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-4 bg-gray-900 rounded-xl px-6 py-4 w-full max-w-md shadow-lg">
            <img
              src="/images/whatsapp.png" 
              alt="WhatsApp Icon"
              className="w-20 h-20 object-contain"
            />
            <p className="text-gray-300 text-lg text-left">
              0813-9179-6301
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
