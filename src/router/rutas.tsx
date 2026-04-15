import Header from "../componentes/layout/header";
import Navbar from "../componentes/layout/nav";
import Footer from "../componentes/layout/footer";
import Proyectos from "../componentes/layout/proyectos";
import Contacto from "../componentes/layout/contactame";
import ContenidoExtra from "../componentes/layout/historia";

const Rutas = () => {
  return (
    <div className="w-full overflow-x-hidden">
      {/* NAVBAR */}
      <Navbar />

      {/* HEADER */}
      <Header />

      {/* PROYECTOS */}
      <Proyectos />

      {/* CONTACTO */}
      <Contacto />

      {/* CONTENIDO EXTRA */}
      <ContenidoExtra />

      {/* FOOTER */}
      <Footer />
    </div>
  );
};

export default Rutas;
