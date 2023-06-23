/* eslint-disable react/prop-types */

import { AiOutlinePlusCircle } from "react-icons/ai";

const Product = ({ product }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl p-2">
      <figure className="px-10 pt-10">
        <img src={product?.thumbnail} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title text-lg font-semibold">{product?.title}!</h2>
        <div className="flex justify-between items-center">
          <div className="flex gap-8">
            <p className="text-[#6C6C6C] text-lg font-light ">${product?.price}</p>
            <p className="text-[#FF4516] text-lg font-light line-through">${(product?.price - (product?.price * product?.discountPercentage)/100)?.toFixed(2)}</p>
          </div>
          <div className="h-12 w-12 bg-[#F0F0F0] rounded-full flex items-center justify-center text-2xl cursor-pointer">
            <AiOutlinePlusCircle />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
