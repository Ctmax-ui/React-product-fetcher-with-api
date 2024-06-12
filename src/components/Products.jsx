import { Link, Router } from "react-router-dom";
import {useEffect, useState } from "react";
import useFetcher from "../hooks/useFetcher";

const Products = () => {
  const [offset, setOffset] = useState(() => {
      const savedOffset = sessionStorage.getItem('sessionPageNumber');
      return savedOffset !== null ? JSON.parse(savedOffset) : 1;
  });
  const [limit, setLimit] = useState(12);
  
  
  const { showProduct, isLoading} = useFetcher(
    `products?offset=${offset}&limit=${limit}`
  );
  const products = showProduct;
  
  useEffect(()=>{
      sessionStorage.removeItem('sessionPageNumber')
  },[offset])
  
  
  function offsetHandle() {
    sessionStorage.setItem('sessionPageNumber', JSON.stringify(offset));
  }

  function nextClick() {
    setOffset(offset + limit);
  }

  function prevClick() {
    setOffset(Math.max(offset - limit, 0));
  }

  function cleanUrl(url) {
    return url.replace(/[\[\]"]/g, "");
  }

  if (isLoading) {
    return (
      <h1 className="text-black m-auto w-5 text-4xl text-center font-semibold">
        Loading...
      </h1>
    );
  }

  return (
    <>
      <div className="container mx-auto" id="container">
        <h1 className="mb-4 text-4xl text-center font-bold">
          Ecomarce Products
        </h1>

        <div className={` grid grid-cols-4 gap-1`}>
          {!isLoading && products.length <= 0 ? (
            <h1 className=" col-span-full text-center my-40 text-4xl ">
              There are no more products avilable.
            </h1>
          ) : (
            products &&
            products.map((product, id) => (
              <div key={id} className="border p-2">
                <img src={cleanUrl(product.images[0])} alt="" />
                <div className="p-3">
                  <Link
                    onClick={()=>{offsetHandle()}}
                    className="text-blue-600 font-semibold hover:text-blue-500"
                    to={`/products/${product.id}`}
                  >
                    {product.title}
                  </Link>
                  <p>Price: ${product.price}</p>
                </div>
              </div>
            ))
          )}
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
};

export default Products;
