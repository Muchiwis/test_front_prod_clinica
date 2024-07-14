import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Link,
} from "react-router-dom";
import Homex from "./component-rutas/Homex";
import Contacts from "./component-rutas/Contacts";
import Products from "./component-rutas/Products";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Homex />,
    children: [{ path: "/product/:productid", element: <Products /> }],
  },
  {
    path: "/contacts",
    element: <Contacts />,
  },
  {
    path: "/products",
    element: <Products />,
  },
]);

export default function RutasBrowProv() {
  return <RouterProvider router={router} />;
}
