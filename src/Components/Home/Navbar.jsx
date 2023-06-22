import logo from "../../assets/logo.png";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BsBag } from "react-icons/bs";
import { VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div>
      <div className="bg-primary ">
        <div className="navbar container mx-auto ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <input
                  type="text"
                  placeholder="Search SnipShop.com"
                  className="input input-bordered input-error w-full max-w-xs"
                />
              </ul>
            </div>
            <img className="cursor-pointer" src={logo} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered input-sm w-screen max-w-xl"
              />
            </ul>
          </div>
          <div className="navbar-end cursor-pointer">
            <div className="text-white">
              <div className="flex">
                <AiOutlineUser />
                <p className="text-xs ml-3"> Account</p>
              </div>
            </div>
            <div className="text-white ml-4">
              <div className="flex">
                <AiOutlineHeart />
                <p className="text-xs ml-2"> My Items</p>
              </div>
            </div>
            <div className="text-white ml-4">
              <BsBag />
            </div>
            <div className="text-white ml-4">
              <VscThreeBars />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
