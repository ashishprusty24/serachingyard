import { Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./product.module.css";
const Product = () => {
  const [product, setproduct] = useState([]);
  const handlegetproduct = () => {
    axios.get("http://localhost:7070/product/").then((r) => setproduct(r.data));
  };

  useEffect(() => {
    handlegetproduct();
  }, []);

  return (
    <div className= {styles.productcontainer}>
      {product.map((data) => (
        <Link to={`/product/${data._id}`}>
          <div >
            <img  className= {styles.productimg} src={data.img_arr[0]} alt="" />
            <Heading> {data.name_arr[0]} </Heading>
            <Text> {data.price} </Text>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Product;
