import { Flex } from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";
const Navbar = () => {
    const [data,setdata] = useState([])
    const cartlength = ()=>{
        axios.get("http://localhost:7070/cart")
        .then((r)=>{
            console.log(r.data);
            setdata(r.data)
        })
    }

    useEffect(()=>{
        cartlength()
    },[])

    console.log(1234);
  return (
    <div className={styles.navbar}>
      <div class="nav_logo">
        <Link to="/" >
        <img
          src="https://www.searchingyard.com/_next/static/media/icon.e85db0e4.svg"
          alt="logo"
        />
        </Link>
      </div>
      <div className={styles.nav_list}>
        <Link to="/product">
          <h2>Product</h2>
        </Link>
      </div>
      <div>
        <Link to="/cart">
          <Flex>
            <h2>Cart</h2>
            <span> {data.length} </span>
          </Flex>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
