import "./App.css";
import Footer from "./Components/Home/Footer";
import Header from "./Components/Home/Header";

import Navbar from "./Components/Home/Navbar";
import PopularBrands from "./Components/Home/PopularBrands";
import PreOrder from "./Components/Home/PreOrder";
import ProductSeller from "./Components/Home/ProductSeller";
import ShopByCategory from "./Components/Home/ShopByCategory";
import ShopTrending from "./Components/Home/ShopTrending";
function App() {
  return (
    <>
     <Navbar/>
     <Header/>
     <ShopTrending/>
     <ShopByCategory/>
     <PreOrder/>
     <div className="bg-[#F4FCFF]">
     <PopularBrands/>
     </div>
     <ProductSeller/>
     <Footer/>
    </>
  );
}

export default App;
