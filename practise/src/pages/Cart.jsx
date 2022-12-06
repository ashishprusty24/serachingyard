import { Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import styles from "./cart.module.css";
const Cart = () => {
    const [cart, setcart] = useState([]);
    const handlegetproduct = () => {
      axios.get("http://localhost:7070/cart/").then((r) => setcart(r.data));
    };
  
    useEffect(() => {
      handlegetproduct();
    }, []);
  console.log(cart);
  return (
    <div className= {styles.cartcontainer}>
    {cart.map((data) => (
     
        <div >
       
          <Image src={data.img}></Image>
          <Heading> {data.name} </Heading>
          <Text> {data.price} </Text>
        </div>
      
    ))}
  </div>
  )
}

export default Cart