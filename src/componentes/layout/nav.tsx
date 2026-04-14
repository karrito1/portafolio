import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center p-4 bg-gray-800 text-white">
      <img src={logo} alt="Logo" className="h-8 w-8 mr-4" />

      <ul className="flex gap-4">
        <li>
          <a href="#inicio">incio</a>
        </li>

        <li>
          <a href="#proyectos">Proyectos</a>
        </li>

        <li>
          <a href="#contacto">Contáctame</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
