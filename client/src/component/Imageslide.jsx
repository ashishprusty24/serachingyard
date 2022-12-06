import { Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import styles from "./imageslide.module.css";
const Imageslide = ({ img_arr }) => {
  console.log(33, img_arr);
  const [imgurl, setimageurl] = useState(img_arr[0]);
  return (
    <Flex>
      <div>
        {img_arr.map((el) => (
          <Image
            className={styles.imgslide}
            src={el}
            alt=""
            onClick={() => setimageurl(el)}
          />
        ))}
      </div>
      <div>
        <Image className={styles.imgbox} src={imgurl} alt="" />
      </div>
    </Flex>

    // "hlw"
  );
};

export default Imageslide;
