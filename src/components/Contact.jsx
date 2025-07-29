function Contact() {
  return (
    <section id="contact" className="py-20 bg-black" data-aos="fade-up">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
          Kontak
        </h2>

        <div className="flex flex-col gap-6 sm:flex-row sm:justify-center sm:items-center text-gray-300 text-base sm:text-lg">
          {/* Email */}
          <div className="flex items-center gap-3 justify-center">
            <img src="/images/email.png" alt="Email" className="w-6 h-6" />
            <span className="break-all">euroandrisetyawan@gmail.com</span>
          </div>

          {/* WhatsApp */}
          <div className="flex items-center gap-3 justify-center">
            <img src="/images/wa.png" alt="WhatsApp" className="w-6 h-6" />
            <span>0813-9179-6301</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
