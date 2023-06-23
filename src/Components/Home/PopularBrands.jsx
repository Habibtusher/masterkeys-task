import { AiOutlineArrowRight } from "react-icons/ai";
import apple from "../../assets/apple.png";
import nike from "../../assets/nike.png";
import fila from "../../assets/fila.png";
import bmw from "../../assets/bmw.png";
import adidas from "../../assets/adidas.png";
import mi from "../../assets/mi.png";
import pp from "../../assets/image 49.png";
import fb from "../../assets/pbfb.png";
import instra from "../../assets/pbin.png";
import tw from "../../assets/pbtw.png";
const PopularBrands = () => {
  return (
    <div className="grid grid-flow-row container py-6 mx-auto gap-10 bg-[#F4FCFF]">
      <div className="grid grid-cols-3 gap-10">
        <div className="flex justify-end col-span-2">
          <div className="popular-brands-top w-full bg-no-repeat bg-contain p-8 flex justify-start items-center">
            <div className=" h-96  grid grid-cols-3 gap-8 brands-bg items-center justify-items-center ">
              <div className="brand-col">
                <img src={apple} alt="" />
              </div>
              <div className="brand-col">
                <img src={bmw} alt="" />
              </div>
              <div className="brand-col">
                <img src={nike} alt="" />
              </div>
              <div className="brand-col">
                <img src={fila} alt="" />
              </div>
              <div className="brand-col">
                <img src={mi} alt="" />
              </div>
              <div className="brand-col">
                <img src={adidas} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full justify-center">
          <div>
            {" "}
            <p className="text-3xl text-[#000000] font-[Spectral]">
              Explore Most Popular Brands
            </p>
          </div>
          <div className="mt-9 text-[#585858] font-[Spectral]">
            <p>Life is hard enough already. Let us make it a little easier.</p>
          </div>
          <div className="flex items-center mt-10 cursor-pointer">
            <p className="mr-2 ">See All</p> <AiOutlineArrowRight />{" "}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10">
        <div className="flex justify-end order-1">
          <div className="popular-brands-bottom w-full bg-no-repeat bg-contain p-8 flex justify-start items-center">
            <div className=" h-80  brands-bg-bt items-center justify-items-center ">
              <div className="brand-col-bt">
                <img src={pp} alt="" />
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div className="brand-col-btm1">
                  <img className="-mt-2" src={fb} alt="" />
                  <p className="mt-16 font-medium text-xs">$12.00</p>
                </div>
                <div className="brand-col-btm2">
                  <img className="-mt-2" src={instra} alt="" />
                  <p className="mt-16 font-medium text-xs">$35.00</p>
                </div>
                <div className="brand-col-btm3">
                  <img className="-mt-2" src={tw} alt="" />
                  <p className="mt-16 font-medium text-xs">$22.00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full justify-center">
          <div>
            {" "}
            <p className="text-3xl text-[#000000] font-[Spectral]">
              Sell Easily on Socialmedia
            </p>
          </div>
          <div className="mt-9 text-[#585858] font-[Spectral]">
            <p>Life is hard enough already. Let us make it a little easier.</p>
          </div>
          <div className="flex items-center mt-10 cursor-pointer">
            <p className="mr-2 ">See All</p> <AiOutlineArrowRight />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBrands;
