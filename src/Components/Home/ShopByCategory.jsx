import { useEffect, useState } from "react";
import Product from "./Product";

const ShopByCategory = () => {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch("https://dummyjson.com/products?limit=10&skip=0")
      .then((res) => res.json())
      .then((res) => setData(res.products));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="container mx-auto pt-28">
      <div>
        <p className="text-[#000002] text-4xl font-bold">Shop by Category</p>
        <p className="text-[#000002] opacity-70 text-lg font-normal mt-6">
          Life is hard enough already. Let us
        </p>
        <p className="text-[#000002] opacity-70 text-lg font-normal">
          {" "}
          make it a little easier.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 mt-10">
        {data?.map((product) => <Product key={product.id} product={product}/>)}
      </div>
    </div>
  );
};

export default ShopByCategory;
