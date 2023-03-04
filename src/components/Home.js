import React from "react";
import Navigation from './Navbar'
import Brand from './BrandHeader'
import News from './News';
import Current from './Current';
import Footer from "./Footer";
const Home=()=>{
 return(
 <>
 <Brand />
 <Navigation />
 <News />
 <Current/>
 <Footer/>
 </>

 )


}
export default Home;