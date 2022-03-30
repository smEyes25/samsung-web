import React from "react";
import {
  Container,
  Wrapper,
  Title,
  WrapperProduct,
  Products,
  ProductNotif,
  Notif,
  ProductInfo,
  ProductLinkImage,
  ProductImage,
  ProductColor,
  Color,
  NonColor,
  ProductTitleLink,
  ProductTitle,
  ProductConfig,
  Config,
  ProductID,
  ProductGift,
  Gift,
  ProductPrice,
  ProductNotifPrice,
  Stored,
  Price,
  Sale,
  Tax,
  MainPrice,
  MiddleLine,
  ProductButton,
} from "./styles";
import { products } from "../../data/Itemdata";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIÊU PHẨM MỚI RA MẮT</Title>
        <WrapperProduct>
          {products.map((product) => (
            <Products key={product.id}>
              <ProductNotif>
                {product.types.map((type) => (
                  <Notif>{type.toUpperCase()}</Notif>
                ))}
              </ProductNotif>
              <ProductLinkImage href={product.link}>
                <ProductImage src={product.img} />
              </ProductLinkImage>

              <ProductInfo>
                <ProductColor>
                  {product.colors === null ? (
                    <NonColor />
                  ) : (
                    product.colors.map((color) => <Color color={color} />)
                  )}
                </ProductColor>

                <ProductTitleLink href={product.link}>
                  <ProductTitle>{product.name}</ProductTitle>
                </ProductTitleLink>

                <ProductID>{product.id}</ProductID>

                <ProductConfig>
                  <Config>{product.config.toUpperCase()}</Config>
                </ProductConfig>

                <ProductGift>
                  {product.gifts.map((gift) => (
                    <Gift>{gift}</Gift>
                  ))}
                </ProductGift>
              </ProductInfo>

              <ProductPrice>
                <ProductNotifPrice>
                  <Stored>
                    {product.stored === false
                      ? "Hết hàng"
                      : product.stored === null
                      ? ""
                      : product.stored}
                  </Stored>
                  <Price>
                    {product.sale === null ? (
                      ""
                    ) : (
                      <Sale>GIẢM {product.sale}</Sale>
                    )}
                    <MainPrice>{product.price}</MainPrice>
                  </Price>
                  {product.tax === null ? (
                    ""
                  ) : (
                    <Tax>
                      chiết khấu {product.tax} (giá gốc{" "}
                      <MiddleLine>{product.mainprice}</MiddleLine>)
                    </Tax>
                  )}
                </ProductNotifPrice>
                <Link to="/detail" style={{ height: "45px", width: "80%" }}>
                  <ProductButton>
                    {product.notif === "notif"
                      ? "THÔNG BÁO HÀNG VỀ"
                      : product.notif === "order"
                      ? "ĐẶT HÀNG TRƯỚC"
                      : "THÊM VÀO GIỎ HÀNG"}
                  </ProductButton>
                </Link>
              </ProductPrice>
            </Products>
          ))}
        </WrapperProduct>
      </Wrapper>
    </Container>
  );
};

export default Product;
