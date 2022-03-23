import React from "react";
import {
  Container,
  Wrapper,
  ArrowLeft,
  ArrowRight,
  Image,
  Button,
} from "./styles";
import ImageBanner from "../../picture/banner1.webp";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Banner = () => {
  return (
    <Container>
      <Wrapper>
        <ArrowLeft>
          <ArrowForwardIosIcon />
        </ArrowLeft>
        <ArrowRight>
          <ArrowBackIosNewIcon />
        </ArrowRight>
        <Image src={ImageBanner} />
        <Button>MUA NGAY</Button>
      </Wrapper>
    </Container>
  );
};

export default Banner;
