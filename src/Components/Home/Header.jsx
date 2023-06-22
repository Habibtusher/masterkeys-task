import camera from "../../assets/camera.png";
import cameraStand from "../../assets/camera-stand.png";
import lens from "../../assets/lens.png";
import { IoIosArrowDown } from "react-icons/io";
import { BsDot } from "react-icons/bs";
const Header = () => {
  return (
    <div className="w-full hero-bg bg-no-repeat bg-cover">
      <div className="container mx-auto bg-vector w-full  bg-no-repeat bg-contain h-full">
        <p>dfasdashdasdash</p>
        <div className="grid grid-cols-5">
          <div
            style={{ height: "670px" }}
            className="col-span-2 flex flex-col  justify-center"
          >
            <p className="font-medium text-xs">
              100% QUALITY, 100% SATISFACTION
            </p>
            <p
              style={{ lineHeight: "1.3" }}
              className="text-6xl text-[#000002] font-extrabold mt-3"
            >
              Where the world comes to shop.
            </p>
            <p className="font-normal opacity-75  text-[#000002] text-lg mt-10">
              Life is hard enough already. Let us make it a little easier,
              Vision of Snipshop for a better outlook.
            </p>
            <div className="flex justify-between items-center mt-10">
              <button className="btn btn-wide  btn-neutral  rounded-3xl">
                Shop now
              </button>
              <div>
                <p className="font-normal opacity-75  text-[#000002] text-lg">
                  Start from
                </p>
                <p className="text-[#2A2A2A] font-[Poppins] text-3xl font-semibold">
                  110.00$
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-2 -ml-20 flex flex-col items-center">
            <div
              style={{ height: "670px" }}
              className="header-mid col-span-2 flex flex-col items-center  justify-center"
            >
              <div className="flex justify-center items-center header-mid-circle">
                <img src={camera} alt="" />
              </div>
            </div>
            <div className="flex items-center  cursor-pointer text-blue-400">
              <p className="mr-3 text-blue-700 font-normal text-sm">PPEV</p>
              <BsDot className="text-3xl "/>
              <BsDot className="text-3xl text-blue-700"/>
              <BsDot className="text-3xl"/>
              <BsDot className="text-3xl"/>
              <p className="ml-3 text-blue-700 font-normal text-sm">NEXT</p>
            </div>
          </div>
          <div className="flex flex-col  justify-center items-center gap-20 font-semibold text-xs">
            <div className="w-36 h-36 flex flex-col  justify-center text-center">
              <img src={lens} alt="" />
              <p className="mt-4">Fuji 14mm</p>
              <p> Lens</p>
            </div>
            <div className="w-36 h-36 flex flex-col  justify-center text-center">
              <img src={cameraStand} alt="" />
              <p className="mt-4">Camera</p>
              <p> Stand</p>
            </div>
            <div className="ml-3 cursor-pointer h-8 w-8 rounded-full text-[#F4F4F4] bg-[#001439]  mr-3 flex items-center justify-center">
              {/* <img src={leftarrow} alt="" /> */}
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
