import { useRef } from "react";
import { Outlet, Link } from "react-router-dom";
import { lista } from "./listas";
export default function Homex() {
  const footerRef = useRef(null);
  console.log(lista);
  const scrollToFooter = () => {
    footerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gray-300">
      <section className="h-screen w-screen flex justify-center items-center bg-red-300">
        {/* Contenido de tu portada */}
        <button
          className="bg-blue-950 text-white px-4 py-3 rounded-md"
          onClick={scrollToFooter}
        >
          Ir al Footer
        </button>
        <ul className="mx-4">
          {lista.map((lista, index) => (
            <li key={index}>
              <Link to={`/product/${lista.id}`}>{lista.nombre}</Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </section>

      <section className="h-screen w-screen flex justify-center items-center bg-yellow-600">
        <h1 className="bg-gray-900 text-white px-5 py-4 rounded-xl w-96 h-52">
          Formulario
        </h1>
      </section>

      <footer
        className="h-screen w-screen flex justify-center items-center bg-green-600"
        ref={footerRef}
      >
        <h1 className="bg-gray-900 text-white px-5 py-4 rounded-xl w-96 h-52">
          Footer
        </h1>
      </footer>
    </div>
  );
}
