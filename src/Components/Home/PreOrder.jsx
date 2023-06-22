import { AiOutlineArrowRight } from "react-icons/ai";

const PreOrder = () => {
  return (
    <div className="container mx-auto pt-3">
      <div className="text-3xl text-center">
        <p>Featured Product For</p>
        <p> Pre-Order</p>
      </div>
      <div className="flex items-center justify-end -mt-6 cursor-pointer">
        <p className="text-xs mr-2 font-medium">Discover Our Products</p>
        <AiOutlineArrowRight />{" "}
      </div>
    </div>
  );
};

export default PreOrder;
