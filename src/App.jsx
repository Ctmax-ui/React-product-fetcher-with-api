import { Link, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Product from "./components/Products";
import SingleProducts from "./components/SingleProducts";

function App() {
  return (
    <>
      <div className=" px-32 py-4 m-auto bg-slate-300 flex justify-between align-middle mb-5">
        <div className="text-lg ">Logo</div>

        <ul className="float-right flex justify-between w-3/12">
          <li>
            <Link
              to="/"
              className=" font-semibold text-xl text-dark hover:text-gray-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className=" font-semibold text-xl text-dark hover:text-gray-500 "
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              className="font-semibold text-xl text-dark hover:text-gray-500 "
              to="/about"
            >
              About
            </Link>
            <Outlet />
          </li>
        </ul>
      </div>

      <Routes>
        <Route path="/" element={<h1 className="text-center text-5xl">This is Home page</h1>} />
        <Route path="products">
          <Route index element={<Product />} />
          <Route path=":productId" element={<SingleProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
