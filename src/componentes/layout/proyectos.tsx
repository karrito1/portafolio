import proyectos from "../../datos/datosProyectos.json";
import logoBonita from "../../assets/logoBonita.png";
import salvaConocimiento from "../../assets/SalvaConocieminto.png";

const imageMap: Record<string, string> = {
  "/assets/logoBonita.png": logoBonita,
  "/assets/SalvaConocieminto.png": salvaConocimiento,
};

const Proyectos = () => {
  return (
    <>
      <section id="proyectos" className="p-10 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-6">Proyectos</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {proyectos.map((proyecto, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <img
                src={imageMap[proyecto.image] ?? proyecto.image}
                alt={proyecto.title}
                className="w-full mb-3 rounded"
              />
              <h3 className="font-bold text-xl">{proyecto.title}</h3>
              <p className="text-gray-600">{proyecto.description}</p>
              <a
                href={proyecto.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 inline-block mt-2"
              >
                Ver Proyecto
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Proyectos;
