import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import sevenZoroFive from '../../assets/705.png';
import clock from '../../assets/clock.png';
import blue from '../../assets/blue.png';
import chair from '../../assets/chair.png';
import curology from '../../assets/curology.png';
const ShopTrending = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center">
        <p className="text-4xl font-bold text-[#000002]">
          Shop Our Trending Products
        </p>
        <p className="font-normal text-lg mt-4 opacity-75">
          Life is hard enough already. Let us make it a{" "}
        </p>
        <p className="font-normal text-lg opacity-75">little easier.</p>
        <div className="mt-8">
          <div className="flex gap-8 items-center justify-center text-xs font-normal cursor-pointer text-[#5F5F5F]">
            <a className="border-b-2 border-[#041318]">Fashion</a>
            <a>Technology</a>
            <a>Interiors</a>
            <a>Food & Drink</a>
          </div>
          <div className="flex justify-end -mt-10">
            <div className="flex mt-6 cursor-pointer">
              <div className="left-arrow h-5 w-5 rounded-full hover:text-[#F4F4F4] text-[#001439] hover:bg-[#001439] bg-[#F4F4F4] mr-3 flex items-center justify-center">
                {/* <img src={leftarrow} alt="" /> */}
                <IoIosArrowBack />
              </div>
              <div className="right-arrow h-5 w-5 rounded-full hover:text-[#F4F4F4] text-[#001439] hover:bg-[#001439] bg-[#F4F4F4] flex items-center justify-center">
                {/* <img src={rightarrow} alt=""/>   */}
                <IoIosArrowForward />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-5 gap-1 mt-20">
        <div className="w-72 h-48 bg-gradient-to-r from-[#C0D4FE] to-[#ECF1FD] rounded-3xl p-5">
          <div className="flex">
            <div>
              <p className="text-[#171717] text-2xl font-semibold">Seven Zero Five</p>
              <p  className="text-[#475E68] text-base font-medium mt-5">Starting</p>
              <p className="text-[#FF4516] text-base font-semibold mt-5">$10.00</p>
            </div>
            <img className="-mt-20" src={sevenZoroFive} alt="" />
          </div>
        </div>
        <div className="w-72 h-48 bg-gradient-to-r from-[#E9EBF0] to-[#EDEDED] rounded-3xl p-5">
          <div className="flex justify-between">
            <div>
              <p className="text-[#171717] text-2xl font-semibold">Clock</p>
              <p  className="text-[#475E68] text-base font-medium mt-5">Starting</p>
              <p className="text-[#FF4516] text-base font-semibold mt-5">$25.00</p>
            </div>
            <img className="-mt-16" src={clock} alt="" />
          </div>
        </div>
        <div className="w-72 h-48 bg-gradient-to-r from-[#EDEDED] to-[#F0EBFF] rounded-3xl p-5">
          <div className="flex justify-between">
            <div>
              <p className="text-[#171717] text-2xl font-semibold">Curology</p>
              <p  className="text-[#475E68] text-base font-medium mt-5">Starting</p>
              <p className="text-[#FF4516] text-base font-semibold mt-5">$12.00</p>
            </div>
            <img className="-mt-16" src={curology} alt="" />
          </div>
        </div>
        <div className="w-72 h-48 bg-gradient-to-r from-[#EBF9FF] to-[#EDEDED] rounded-3xl p-5">
          <div className="flex justify-between">
            <div>
              <p className="text-[#171717] text-2xl font-semibold">Chair</p>
              <p  className="text-[#475E68] text-base font-medium mt-5">Starting</p>
              <p className="text-[#FF4516] text-base font-semibold mt-5">$16.00</p>
            </div>
            <img className="-mt-16" src={chair} alt="" />
          </div>
        </div>
        <div className="w-72 h-48 bg-gradient-to-r from-[#E9F0FF] to-[#EDEDED] rounded-3xl p-5">
          <div className="flex justify-between">
            <div>
              <p className="text-[#171717] text-2xl font-semibold">Curology</p>
              <p  className="text-[#475E68] text-base font-medium mt-5">Starting</p>
              <p className="text-[#FF4516] text-base font-semibold mt-5">$10.00</p>
            </div>
            <img className="-mt-12" src={blue} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopTrending;
