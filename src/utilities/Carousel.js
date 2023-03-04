import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ImageHoverZoom from './ImageHoverZoom';
import image1 from '../images/bitcoin-wallet.jpg';
import image4 from '../images/miners.png';
import image2 from '../images/italy-cryptocurrency.jpg';
import image3 from '../images/microstrategy.jpg';
import { useNavigate } from "react-router-dom";
const data1="The move comes after nearly two years since PayPal enabled users to buy and sell crypto on its platform.After rolling out the ability to buy and sell crypto on its platform in October 2020, PayPal is finally allowing users the ability to natively transfer, send and receive digital assets between PayPal and other wallets and exchanges. As of Tuesday, the feature is available to select U.S. users, with the feature expanding to all eligible U.S. users in the coming weeks. The first batch of supported coins consists of Bitcoin BTC $16,704, Ether  ETH $1,217, Bitcoin Cash BCH $100, and Litecoin LTC $74.58.  In addition, customers who transfer their crypto onto PayPal can spend it via Checkout at millions of merchant terminals. The company has been granted a full Bitlicense by the New York Department of Financial Services for the conduct.Users would simply need to log in to their accounts and enter the crypto section of the application to start transferring coins. Users are generally required to complete a one-time ID verification before the procedure.Crypto transfers to recipients outside of PayPal would incur a network fee based on their respective blockchains, but transfers between PayPal users will not incur such fees. To protect users' privacy, the firm generates a new recipient address for each transaction into one's PayPal account. PayPal will also not charge fees for incoming transfers,The company is also working to integrate other forms of cryptocurrency services, such as central bank digital currencies, to boost its digital footprint. It is also exploring the possibility of launching its own stablecoin, dubbed \" PayPal Coin.\" The discovery came after a developer found evidence of such a stablecoin within the source code of the company's iPhone app. "
const data2="Prime Minister Giorgia Meloni's new bill also includes an incentive for those declaring crypto for tax purposes. Crypto traders in Italy will be subject to a 26% capital-gains tax starting in 2023, according to a new budget that won parliamentary approval on Thursday.Italian Prime Minister Giorgia Meloni's 2023 expansionary budget – which was completed in a rush before the end of the year – features 21 billion euros ($22.3 billion) in tax breaks to assist businesses and households facing the energy crisis, Reuters reported.In Italy, where crypto remains largely unregulated, the 387-page budget legitimizes crypto assets by defining them as \"a digital representation of value or rights, which can be transferred and stored electronically, using the technology of distributed ledger or similar technology.\"Italy's (and most recently Portugal\'s) move to introduce a capital-gains tax on crypto comes ahead of the implementation of the European Union's Markets in Crypto Assets (MiCA) regulation that promises a licensing frameworks and stringent operating requirements for crypto-service providers in the 27-member bloc.The 26% rate applies to gains from crypto trading if they exceed 2,000 euros per tax period. As an incentive for declaring crypto profits, the new bill also sets a \"substitute income tax\" for investors at 14% of the value of the assets held as of Jan. 1, 2023, instead of the cost at the time of purchase.According to the new rules, losses from crypto investments can be deducted from profits and be carried forward.Investors, however, may require some additional guidance on what qualifies as a taxable event as the document also says, \"the exchange between crypto assets having same characteristics and functions,\" doesn't constitute a \"fiscal case."
const data3="Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases. This year, the world’s largest cryptocurrency has emerged as “the institutional-grade digital asset,” said Microstrategy founder Michael Saylor.Microstrategy Acquires More Bitcoin,Nasdaq-listed Microstrategy Inc. announced Wednesday that it has purchased more bitcoin for its corporate treasury. Michael Saylor, the company’s founder and executive chairman, tweeted Wednesday:Microstrategy has increased its bitcoin holdings by ~2,500 BTC. As of 12/27/22 Microstrategy holds ~132,500 bitcoin acquired for ~$4.03 billion at an average price of ~$30,397 per bitcoin.In its filing with the U.S. Securities and Exchange Commission (SEC), Microstrategy clarified that the 2,500 The subsidiary bought approximately 2,395 BTC at acoins were acquired between Nov. 1 and Dec. 24 by its wholly owned subsidiary Macrostrategy.n average price of $17,871 per coin between Nov. 1 and Dec. 21. It then sold about 704 BTC at $16,776 per coin on Dec. 22. Macrostrategy then bought about 810 more BTC at $16,845 per coin on Dec. 24. At the time of writing, bitcoin is trading at $16,656.80.The bitcoin sale in December marked the first time Microstrategy sold its bitcoin since it began accumulating the crypto for its corporate treasury in 2020. The company cited tax reasons for selling BTC. “Microstrategy plans to carry back the capital losses resulting from this transaction against previous capital gains, to the extent such carrybacks are available under the federal income tax laws currently in effect, which may generate a tax benefit,” the SEC filing describes.Saylor said in an interview last week:The most positive thing of the year is the emergence of bitcoin as the institutional grade digital asset and the clarity that … there is one crypto asset that’s a digital commodity … Bitcoin is that commodity.The executive noted that both the chairman of the SEC and the chair of the Commodity Futures Trading Commission (CFTC) have confirmed that bitcoin is a commodity.Saylor previously explained that Microstrategy is investing in BTC “for the long term.” He added: “Our strategy is to buy bitcoin and hold the bitcoin, so there’s no price target … I expect bitcoin is going to go into the millions. So, we’re very patient. We think it’s the future of money.”"
const data4="2022 has been a rough and tough year for investors, traders, cryptocurrency businesses, and miners in general. The prolonged bear market, exacerbated by a series of catastrophic events, posed a threat to miners.Miners were dealing with a variety of issues, including defaulted loans, quarterly losses, and soaring bitcoin hashrates that reached all-time highs. All these factors were affecting the profitability of the miners and were causing sell pressure.The situation was aggravated when cryptocurrency prices, including Bitcoin’s, plummeted. Bitcoin, which was hovering around $48,000 last year, hit a low of $15,590 by the end of 2022. According to the data collected from The Block, bitcoin miners’ revenue hit $9.55 billion in 2022.Bitcoin miners’ revenue dropped in 2022.Bitcoin, which is trading at $16,721 at press time, has been on a downward spiral alongside other cryptocurrencies. The falling cryptocurrency prices had a major effect on the income and profits of miners. Even though the $9.55 billion in revenue in 2022 seems like a large number, it is comparatively lower than that of 2021.Over the course of 2021, bitcoin miners made more than $15 billion in revenue, according to the data from the block. This was actually considered to be a 206% year-over-year increase."

const news=[{heading:'PayPal enables transfer of digital currencies to external wallets',src:image1,details:data1},
{heading:'Italian Parliament Approves 26% Crypto-Gains Tax in 2023 Budget',src:image2,details:data2},{heading:' Microstrategy Buys More Bitcoin — Company\'s Crypto Holdings Grow to 132,500 BTC',src:image3,details:data3},{heading:'Bitcoin Miners\' Revenue Hits $9.55 Billion in 2022',src:image4,details:data4}
]

function CarouselFade() {
  const Navigate=useNavigate();
    const clickHandler=(item)=>{
      console.log(item)
        Navigate('./NewsDetails',{state:{info:item.details}})
    }
  return (
    <Carousel fade>
      <Carousel.Item interval={2500}>
      <ImageHoverZoom image={image1} />
        <Carousel.Caption>
          <b><h3 style={{font:'Tahoma'}} >{news[0].heading}</h3></b>
          <Button onClick={clickHandler.bind(null,news[0])}>Read More...</Button>
        </Carousel.Caption>
        
      </Carousel.Item>
      <Carousel.Item interval={2500}>
      <ImageHoverZoom image={image2} />
        <Carousel.Caption>
          <h3>{news[1].heading}</h3>
          <Button onClick={clickHandler.bind(null,news[1])}>Read More...</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
      <ImageHoverZoom image={image3} />
        <Carousel.Caption>
          <h3>{news[2].heading}</h3>
          <Button onClick={clickHandler.bind(null,news[2])}>Read More...</Button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2500}>
      <ImageHoverZoom image={image4} />
        <Carousel.Caption >
          <h3>{news[3].heading}</h3>
          <Button onClick={clickHandler.bind(null,news[3])}>Read More...</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFade;