import React from "react";
import {
  Container,
  Wrapper,
  WrapperTitle,
  Title,
  Name,
  WrapperTotalPrice,
  TotalPrice,
  OldPrice,
  SavePrice,
  LineThroughPrice,
  MainPrice,
  BuyButton,
} from "./styles";

const Price = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperTitle>
          <Title>Sản phẩm mới</Title>
          <Name>Galaxy S22 Ultra</Name>
        </WrapperTitle>

        <WrapperTotalPrice>
          <TotalPrice>
            <OldPrice>
              <LineThroughPrice>30.990.300 đ </LineThroughPrice>
              Tiết kiệm 1.998.874 đ
            </OldPrice>
            <MainPrice>
              Từ
              <SavePrice> 1.020.119 đ </SavePrice>/tháng hoặc
              <SavePrice> 12.241.426 đ </SavePrice> khi thu cũ đổi mới
            </MainPrice>
          </TotalPrice>

          <BuyButton>Mua ngay</BuyButton>
        </WrapperTotalPrice>
      </Wrapper>
    </Container>
  );
};

export default Price;
