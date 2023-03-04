import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from '../utilities/Card'
import image1 from '../images/bitcoin-wallet.jpg';
import image4 from '../images/miners.png';
import image2 from '../images/italy-cryptocurrency.jpg';
import image3 from '../images/microstrategy.jpg'
import Carousel from '../utilities/Carousel'


const news=[{heading:'PayPal enables transfer of digital currencies to external wallets',src:image1},
{heading:'Prime Minister Giorgia Melonis\'s  new bill also includes an incentive for those declaring crypto for tax purposes.',src:image2},{heading:' Microstrategy Buys More Bitcoin — Company\'s Crypto Holdings Grow to 132,500 BTC',src:image3},{heading:'Bitcoin Miners\' Revenue Hits $9.55 Billion in 2022',src:image4}
]

const News=()=>{

  
    return(
        <>
     
      <Carousel />
      
      </>
    )
  
}

export default News;
