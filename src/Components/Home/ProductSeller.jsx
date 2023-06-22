import productseller from "../../assets/productseller.png";
import avater from "../../assets/avater.png";
// import leftarrow from "../../assets/leftarrow.png";
// import rightarrow from "../../assets/rightarrow.png";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
const ProductSeller = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="product-seller-img-bg flex justify-end sm:items-center">
        <div className="image-box bg-cover ">
          <img src={productseller} alt="" />
        </div>
      </div>
      <div>
        <div className="flex flex-col sm:items-center justify-center product-seller-comment">
          <div className="flex items-center">
            <p className="text-xl font-semibold ">Justin Pierre</p>
            <img src={avater} alt="" />
          </div>
          <p className="text-sm text-slate-300">Products Seller</p>
          <p className=" text-xl font-medium w-1/2 italic mt-7">
            “In 2 years, my business went from just me and my Shop site to 40
            employees, my own fulfillment center and over 22 million dollars in
            revenue.”
          </p>{" "}
          <div className="flex mt-6 cursor-pointer">
            <div className="left-arrow h-8 w-8 rounded-full hover:text-[#F4F4F4] text-[#001439] hover:bg-[#001439] bg-[#F4F4F4] mr-3 flex items-center justify-center">
              {/* <img src={leftarrow} alt="" /> */}
              <IoIosArrowBack />
            </div>
            <div className="right-arrow h-8 w-8 rounded-full hover:text-[#F4F4F4] text-[#001439] hover:bg-[#001439] bg-[#F4F4F4] flex items-center justify-center">
              {/* <img src={rightarrow} alt=""/>   */}
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSeller;
