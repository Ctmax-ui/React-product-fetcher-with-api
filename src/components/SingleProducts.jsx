import { Link, useParams } from "react-router-dom";
import useFetcher from "../hooks/useFetcher";

const SingleProducts = () => {

  const { productId } = useParams();
  const { showProduct, isLoading } = useFetcher(`products/${productId}`);

  return (
    
    <div className="antialiased">
      {isLoading && <h1 className='text-lg text-slate-100'>Loading...</h1>}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <Link to="/" className="hover:underline hover:text-gray-600">
              Home
            </Link>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <Link
              to="/products"
              className="hover:underline hover:text-gray-600"
            >
              Products
            </Link>
            <span>
              <svg
                className="h-5 w-5 leading-none text-gray-300"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
            <span>{showProduct && showProduct.title}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div>
                <div className=" h-28 p-3 md:h-80 rounded-lg bg-gray-100 mb-4 flex justify-center">
                  <img
                    className=" h-full rounded-md"
                    src={`${showProduct && showProduct.images && showProduct.images[0]}`}
                    alt=""
                  />
                </div>

                <div className="flex -mx-2 mb-4 gap-2 ">
                  <div className="w-28 h-28 rounded-md bg-gray-100 p-2">
                    <img
                      className="h-full rounded-md"
                      src={`${showProduct && showProduct.images && showProduct.images[0]}`}
                      alt=""
                    />
                  </div>
                  <div className="w-28 h-28 rounded-md bg-gray-100 p-2">
                    <img
                      className="h-full rounded-md"
                      src={`${showProduct && showProduct.images && showProduct.images[1]}`}
                      alt=""
                    />
                  </div>
                  <div className="w-28 h-28 rounded-md bg-gray-100 p-2">
                    <img
                      className="h-full rounded-md"
                      src={`${showProduct && showProduct.images && showProduct.images[2]}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                {showProduct ? showProduct.title : "loading..."}
              </h2>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="text-indigo-400 mr-1 mt-1">$</span>
                    <span className="font-bold text-indigo-600 text-3xl">
                      {showProduct ? showProduct.price : "00"}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <p className="text-green-500 text-xl font-semibold">
                    Save 12%
                  </p>
                  <p className="text-gray-400 text-sm">
                    Inclusive of all Taxes.
                  </p>
                </div>
              </div>

              <p className="text-gray-500">
                {showProduct ? showProduct.description : "Loading..."}
              </p>

              <div className="flex py-4 space-x-4">
                <div className="relative">
                  <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold ">
                    Qty
                  </div>
                  <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>

                  <svg
                    className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 9l4-4 4 4m0 6l-4 4-4-4"
                    />
                  </svg>
                </div>

                <button
                  type="button"
                  className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProducts;
