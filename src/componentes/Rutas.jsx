import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Contacts from "./component-rutas/Contacts";
import Homex from "./component-rutas/Homex";
import Products from "./component-rutas/Products";

export default function Rutas() {
  return (
    <BrowserRouter>
      <nav className="py-4 text-white bg-gray-800">
        <ul className="flex w-screen justify-around">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Homex />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}
