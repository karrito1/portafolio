import Header from "../componentes/layout/header";
import Navbar from "../componentes/layout/nav";
import Footer from "../componentes/layout/footer";
import Proyectos from "../componentes/layout/proyectos";
import Contacto from "../componentes/layout/contactame";

const Rutas = () => {
  return (
    <>
      {/*layout*/}
      <Navbar></Navbar>
      <Header></Header>
      <Proyectos></Proyectos>
      <Contacto></Contacto>

      {/*constendio del sitio*/}

      <section className="flex flex-row flex-wrap h-lvh p-2">
        <article className="flex flex-wrap flex-col basis-3/4 "></article>
      </section>
      <Footer></Footer>

      {/*constendio del sitio */}
    </>
  );
};

export default Rutas;
