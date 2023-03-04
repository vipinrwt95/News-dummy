import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageHoverZoom from './ImageHoverZoom';
import image1 from '../images/bitcoin-wallet.jpg';
import image4 from '../images/miners.png';
import image2 from '../images/italy-cryptocurrency.jpg';
import image3 from '../images/microstrategy.jpg';
const news=[{heading:'PayPal enables transfer of digital currencies to external wallets',src:image1},
{heading:'Prime Minister Giorgia Melonis\'s  new bill also includes an incentive for those declaring crypto for tax purposes.',src:image2},{heading:' Microstrategy Buys More Bitcoin — Company\'s Crypto Holdings Grow to 132,500 BTC',src:image3},{heading:'Bitcoin Miners\' Revenue Hits $9.55 Billion in 2022',src:image4}
]

function CarouselFade() {
    const clickHandler=()=>{
        console.log('1st Slide')
    }
  return (
    <Carousel fade>
      <Carousel.Item interval={2500}>
      <ImageHoverZoom image={image1} />
        <Carousel.Caption>
          <b><h3 style={{font:'Tahoma'}} >{news[0].heading}</h3></b>
          <Button>Read More...</Button>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item interval={2500}>
      <ImageHoverZoom image={image2} />
        <Carousel.Caption>
          <h3>{news[1].heading}</h3>
          <Button>Read More...</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
      <ImageHoverZoom image={image3} />
        <Carousel.Caption>
          <h3>{news[2].heading}</h3>
          <Button>Read More...</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
      <ImageHoverZoom image={image4} />
        <Carousel.Caption >
          <h3>{news[3].heading}</h3>
          <Button>Read More...</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;