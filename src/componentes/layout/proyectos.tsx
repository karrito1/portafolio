import proyectos from "../../datos/datosProyectos.json";
import logoBonita from "../../assets/logoBonita.png";
import salvaConocimiento from "../../assets/SalvaConocieminto.png";

const imageMap: Record<string, string> = {
  "/assets/logoBonita.png": logoBonita,
  "/assets/SalvaConocieminto.png": salvaConocimiento,
};

const Proyectos = () => {
  return (
    <section id="proyectos" className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Proyectos</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {proyectos.map((proyecto, index) => (
          <div
            key={index}
            className="bg-white rounded-xl w-full shadow-md overflow-hidden hover:shadow-xl transition duration-300"
          >
            <img
              src={imageMap[proyecto.image] ?? proyecto.image}
              alt={proyecto.title}
              className="w-full h-36 object-cover hover:scale-105 transition duration-300"
            />

            <div className="p-4">
              <h3 className="font-bold text-xl mb-2">{proyecto.title}</h3>
              <p className="text-gray-600 text-sm mb-3">
                {proyecto.description}
              </p>

              <a
                href={proyecto.url}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-white bg-blue-500 px-4 py-2 rounded-md text-sm hover:bg-blue-600 transition"
              >
                Ver Proyecto
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Proyectos;
