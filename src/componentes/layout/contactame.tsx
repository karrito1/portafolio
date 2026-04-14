const Contacto = () => {
  return (
    <section id="contacto" className="p-10 bg-gray-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Contáctame</h2>

      <div className="flex flex-col gap-4">
        <a
          href="https://github.com/?locale=es-419"
          target="_blank"
          className="hover:text-gray-300"
        >
          GitHub
        </a>

        <a
          href="https://wa.me/573026078214"
          target="_blank"
          className="hover:text-gray-300"
        >
          WhatsApp
        </a>

        <a href="kamilovilla554@gmail.com" className="hover:text-gray-300">
          Correo
        </a>
      </div>
    </section>
  );
};

export default Contacto;
