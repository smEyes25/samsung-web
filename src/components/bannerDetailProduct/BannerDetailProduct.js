import React from "react";
import { Container, Wrapper, Image, ButtonLeft, ButtonRight } from "./styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const BannerDetailProduct = () => {
  return (
    <Container>
      <Wrapper>
        <Image src="https://images.samsung.com/vn/smartphones/galaxy-s22-ultra/buy/S22_Ultra_Carousel_GroupKV_PC.jpg?imwidth=1366" />
        <ButtonLeft>
          <ArrowBackIosNewIcon />
        </ButtonLeft>
        <ButtonRight>
          <ArrowForwardIosIcon />
        </ButtonRight>
      </Wrapper>
    </Container>
  );
};

export default BannerDetailProduct;
