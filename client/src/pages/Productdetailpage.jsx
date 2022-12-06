import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import styles from "./productdetail.module.css";

import { useParams } from "react-router-dom";
import Deliverydetails from "../component/Deliverydetails";
import Imageslide from "../component/Imageslide";
import Navbar from "../component/Navbar";
const Productdetailpage = () => {
  const [data, setdata] = useState([]);
  const [name, setname] = useState();
  const [size, setsize] = useState("");
  const [qty, setqty] = useState("");
  const [color, setcolor] = useState();
  const params = useParams();
  const handlegetdata = () => {
    axios.get(`http://localhost:7070/product/${params.id}`).then((r) => {
      console.log(r.data[0].description);
      setdata(r.data[0]);
    });
  };

  useEffect(() => {
    handlegetdata();
  }, []);

  console.log(data);

  const handleaddtocart = () => {
    if (qty === "") {
      return alert("please fill the qty");
    }
    const payload = {
      name: name,
      img: data.img_arr[0],
      size: size,
      qty: qty,
      color: color,
    };
    console.log(payload);
    axios.post("http://localhost:7070/cart", payload).then((r) => {
      alert("product added to cart");
    });
  };

  if (data.length == 0) return <div>Loading...</div>;
  return (
    <Box>
      <Navbar />
      <Box className={styles.pcontainer}>
        <Box w="48%" marginTop="30px">
          <Imageslide img_arr={data.img_arr} />
        </Box>
        <Box w="48%" background="#f6f6f8" marginTop="30px" padding="10px 10px">
          <Box>
            <Heading fontSize="15px" margin="10px">
              Available Products
            </Heading>
            <Select
              onChange={(e) => setname(e.target.value)}
              value={name}
              background="#fff"
              margin="10px"
            >
              <option selected value={data.name_arr[0]}>
                Classic pullover Hoddie-US$38.99 USD
              </option>
              <option value={data.name_arr[1]}>
                Classic pullover t-shirt-US$38.99 USD 2
              </option>
              <option value={data.name_arr[2]}>
                Classic pullover casual-shirt-US$38.99 USD 3
              </option>
            </Select>
          </Box>
          <Flex gap="2rem" margin="10px">
            <button autoFocus>
              <img className={styles.selectimg} src={data.img_arr[0]} alt="" />
            </button>
            <button>
              <img className={styles.selectimg} src={data.img_arr[1]} alt="" />
            </button>
          </Flex>
          <Box>
            <Heading fontSize="15px" margin="10px">
              Available Products
            </Heading>
            <Text fontSize="15px" margin="10px">
              {data.description}
            </Text>
          </Box>
          <Box>
            <Accordion allowMultiple>
              <AccordionItem w="50%">
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      See more detail
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          <Flex gap="2rem" margin="10px">
            <Box>
              <Heading fontSize={"15px"} mt={"30px"} mb={"10px"}>
                Select Size
              </Heading>
              <Select
                onChange={(e) => setsize(e.target.value)}
                value={size}
                background="#fff"
              >
                <option selected value="s">
                  S
                </option>
                <option value="xl">XL</option>
                <option value="xll">XLL</option>
              </Select>
            </Box>
            <Box>
              <Heading fontSize={"15px"} mt={"30px"} mb={"10px"}>
                Quantity
              </Heading>
              <Input
                type="number"
                onChange={(e) => setqty(e.target.value)}
                value={qty}
                background="#fff"
              ></Input>
            </Box>
          </Flex>
          <Box margin="10px">
            <Text>Colors</Text>
            <Flex gap="1rem">
              <button onClick={() => setcolor("black")}>
                <Box
                  w="30px"
                  h="30px"
                  background="black"
                  borderRadius="10px"
                ></Box>
              </button>
              <button onClick={() => setcolor("gray")}>
                <Box
                  w="30px"
                  h="30px"
                  background="gray"
                  borderRadius="10px"
                ></Box>
              </button>
              <button onClick={() => setcolor("blue")}>
                <Box
                  w="30px"
                  h="30px"
                  background="blue"
                  borderRadius="10px"
                ></Box>
              </button>
              <button onClick={() => setcolor("tomato")}>
                <Box
                  w="30px"
                  h="30px"
                  background="tomato"
                  borderRadius="10px"
                ></Box>
              </button>
            </Flex>
          </Box>
          <Box>
            <Button
              background="#31b357"
              color="#fff"
              h={"62px"}
              w={"100%"}
              fontSize={"17px"}
              my={"10px"}
              onClick={handleaddtocart}
            >
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>
      <Deliverydetails />
    </Box>
  );
};

export default Productdetailpage;
