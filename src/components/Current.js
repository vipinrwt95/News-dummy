import React,{useEffect, useState} from "react";
import Button from 'react-bootstrap/Button';
import Currency from "./Currency";

const Current=()=>{
 const [currentprice,setPrice]=useState(0)
const fetchingrate=async()=>{
  console.log(currentprice)
      setInterval(()=>{
         fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
          .then((response) => response.json())
         .then((data) =>setPrice(data.bpi.USD.rate));
     },3000)

     

}

useEffect(()=>{

  fetchingrate();

},[])
 
return (
    <div className="currency">
     <Button variant='dark' style={{border:'solid',color:'green'}} > <p>Bitcoin :  ${currentprice}</p></Button>
     <Button variant='dark' style={{border:'solid',color:'green'}} > <p>Bitcoin :  ${currentprice}</p></Button><Button variant='dark' style={{border:'solid',color:'green'}} > <p>Bitcoin :  ${currentprice}</p></Button>
    </div>
)

}

export default Current;