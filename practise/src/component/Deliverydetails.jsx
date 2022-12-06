import { Box, Flex, Heading, Select, Text } from "@chakra-ui/react";
import React from "react";

const Deliverydetails = () => {
  return (
    <Box width="60%" marginLeft="2rem" marginTop="2rem">
      <Flex gap="20px" >
        <Heading>Delivery details</Heading>
        <Select  w="30%" >
          <option value="usa">USA</option>
          <option value="india">INDIA</option>
          <option value="uk">UK</option>
        </Select>
        <hr />
      </Flex>
      <Box>
        <Text marginTop="10px" >All products are printed to be order</Text>
        <Text marginTop="10px">
          If you place your order now it will ship on or before December 13,2022
        </Text>
        <Text marginTop="10px">Please allow additional 6-9 business days for shipping</Text>
        <Text marginTop="10px">
          Expected or rush shipping may be available depending upon the products
          selected and the destination country{" "}
        </Text>
        <Text marginTop="10px">shipping cost start at</Text>
        <Box marginTop="10px">
          <Text marginLeft="15px">
            us$13.50 for the first order and US$4.00 for additional order
          </Text>
          <Text marginLeft="15px">
            us$3.50 for the first stiker and US$0.25 for additional stikker
          </Text>
        </Box>
        <Text marginTop="10px">Products are fullfiled in the us</Text>
      </Box>
    </Box>
  );
};

export default Deliverydetails;
