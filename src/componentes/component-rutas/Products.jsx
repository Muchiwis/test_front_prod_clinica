import { useParams } from "react-router-dom";
import { getContact, lista } from "./listas";
import { useMemo } from "react";
export default function Products() {
  const id_producto = useParams();
  const producto = useMemo(
    () => getContact(id_producto.productid),
    [id_producto.productid]
  );
  return (
    <div className="bg-gray-200 border border-gray-800 rounded-md p-y2 px-2">
      <h1 className="border-b-2 border-gray-800 text-center">Productos</h1>
      {producto ? (
        <>
          <p>{producto.id}</p>
          <p>{producto.nombre}</p>
          <p>{producto.apellido}</p>
        </>
      ) : (
        lista.map((productos) => (
          <div
            key={productos.id}
            className="flex justify-evenly items-center text-white bg-gray-800 rounded-md my-4"
          >
            <p>{productos.id}</p>
            <p>{productos.nombre}</p>
            <p>{productos.apellido}</p>
          </div>
        ))
      )}
    </div>
  );
}
