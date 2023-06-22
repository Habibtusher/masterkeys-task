import union from "../../assets/Union.png";
import instra from "../../assets/instra.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import web from "../../assets/web.png";
import pintarest from "../../assets/pintarest.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-bg bg-no-repeat bg-cover mb-0 pb-0">
        <footer className="footer container mx-auto p-10  text-white ">
          <div>
            <span className="footer-title">Shop</span>
            <a className="link link-hover mt-3">Gift cards</a>
            <a className="link link-hover">Shipshop blog</a>
          </div>
          <div>
            <span className="footer-title">Sell</span>
            <a className="link link-hover mt-3">Sell on Shipshop</a>
            <a className="link link-hover">Tearm</a>
            <a className="link link-hover">Forums</a>
            <a className="link link-hover">Affiliates</a>
          </div>
          <div>
            <span className="footer-title">About</span>
            <a className="link link-hover mt-3">SnipShop, Inc.</a>
            <a className="link link-hover">Policies</a>
            <a className="link link-hover">Investors</a>
            <a className="link link-hover">Careers</a>
            <a className="link link-hover">Press</a>
            <a className="link link-hover">Impact</a>
          </div>
          <div>
            <span className="footer-title">Help</span>
            <a className="link link-hover mt-3">Help center</a>
            <a className="link link-hover">Trust and safety</a>
            <a className="link link-hover">Privacy settings</a>
            <a className="link link-hover download-app-part mt-4 flex">
              <div className=" union-box mr-2">
                <div className="flex justify-center items-center w-full h-full">
                  <img src={union} alt="" />
                  <img className="footer-union-img-2" src={union} alt="" />
                </div>
              </div>
              Download the Shipshop app
            </a>
            <div className="flex cursor-pointer mt-4">
            <img src={instra} alt="" />
            <img className="ml-5" src={facebook} alt="" />
            <img className="ml-5" src={twitter} alt="" />
            <img className="ml-5" src={web} alt="" />
            <img className="ml-5" src={pintarest} alt="" />
            </div>
          </div>
        </footer>
      </div>

      <footer
        style={{ backgroundColor: "#232347" }}
        className="footer px-10 py-4 border-t  border-base-300 text-white"
      >
        <div className="container mx-auto flex justify-between">
          <div className="items-center grid-flow-col">
            <p>© 2021-2023 SnipShop.com</p>
          </div>
          <div className="">
            <div className="grid grid-flow-col gap-4">
              <p>Terms of use</p>
              <p>Privacy</p>
              <p>Interest-based ads</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
