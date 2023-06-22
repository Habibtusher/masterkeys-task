import "./App.css";
import Footer from "./Components/Home/Footer";
import Header from "./Components/Home/Header";

import Navbar from "./Components/Home/Navbar";
import PopularBrands from "./Components/Home/PopularBrands";
import PreOrder from "./Components/Home/PreOrder";
import ProductSeller from "./Components/Home/ProductSeller";
function App() {
  return (
    <>
     <Navbar/>
     <Header/>
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
