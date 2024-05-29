import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const [offset, setOffset] = useState(1);
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    console.log(products);
    prod();
  }, [offset, limit]);

  async function prod() {
    try {
      const result = await fetch(
        `https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`
      ).then((res) => res.json());
      setProducts(result);
    } catch (err) {
      console.log(err);
    }
  }

  function nextClick() {
    setOffset(offset + limit);
  }

  function prevClick() {
    setOffset(Math.max(offset - limit, 0));
  }


  return (
    <>
      <div className="container mx-auto" id="container">
        <h1 className="mb-4 text-4xl text-center font-bold">
          Ecomarce Products
        </h1>

        <div className=" grid grid-cols-4 gap-1">
          {products &&
            products.map((product, id) => (
              <div key={id} className="border p-2">
                <img src={product.images[0]} alt="" />
                <div className="p-3">
                  <h2>{product.title}</h2>
                  <p>${product.price}</p>
                </div>
              </div>
            ))}
        </div>
        <div className="my-4 text-center">
          <a
            href="#container"
            onClick={prevClick}
            className=" bg-green-600 text-white px-3 py-2 hover:bg-green-700 rounded-sm mx-3"
          >
            Prev
          </a>

          <a
            href="#container"
            onClick={nextClick}
            className=" bg-green-600 text-white px-3 py-2 hover:bg-green-700 rounded-sm mx-3"
          >
            Next
          </a>
        </div>
      </div>
    </>
  );
}

export default App;
