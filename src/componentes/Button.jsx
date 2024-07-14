export const Button = ({ count, onClick, nombre }) => {
  return (
    <div className="bg-gray-50 py-6 px-28 rounded-md flex flex-col justify-center items-center mx-1">
      <h1 className="text-gray-950 my-4 font-semibold text-4xl">
        Welcome to my page {nombre}!
      </h1>
      <button
        className="bg-blue-950 text-white py-2 px-10 rounded-xl"
        onClick={onClick}
      >
        Click me!
      </button>
      <p className="text-black my-3 text-4xl">{count}</p>
    </div>
  );
};

{
  // const [valor, setValor] = useState(0);
  // const nombre = "Jhord";
  // function incrementar() {
  //   setValor(valor + 1);
  // }
  /* <Button count={valor} onClick={incrementar} nombre={nombre}></Button> */
}
