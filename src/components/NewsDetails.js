import {useLocation} from 'react-router-dom';
import BrandHeader from './BrandHeader';
import Footer from './Footer';
import Navbar from './Navbar'
const NewsDetails=()=>{
const location =useLocation();

return (

    <>
     < BrandHeader/>  
     <Navbar />
<div>{location.state.info}</div>
      <Footer/>
    </>
)
}

export default NewsDetails;