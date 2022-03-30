import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  /* border: 1px solid black; */
  max-width: 1440px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
`;

//TITLE
const Title = styled.h1`
  font-size: 40px;
`;

//PRODUCT
const WrapperProduct = styled.ul`
  /* border: 1px solid black; */
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 80px;
  position: relative;
  width: 80%;
  margin: 0;
  padding: 0;
`;
const Products = styled.li`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  gap: 50px;
`;

const ProductNotif = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  position: relative;
  width: 100%;
`;
const Notif = styled.span`
  font-size: 12px;
  border: 1px solid #cc0000;
  color: #cc0000;
  border-radius: 5px;
  padding: 3px 10px;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: space-between; */
  flex: 4;
`;

const ProductLinkImage = styled.a`
  display: block;
`;
const ProductImage = styled.img`
  width: 240px;
  height: 170px;
`;

const Color = styled.li`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  list-style: none;
  background-color: ${(prop) => prop.color};
  opacity: 0.5;
  border: 1px solid #949494;
  cursor: pointer;
`;
const NonColor = styled.li`
  width: 18px;
  height: 18px;
  background-color: #fff;
  list-style: none;
`;
const ProductColor = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  gap: 10px;
  padding-top: 20px;
`;

const ProductTitleLink = styled.a`
  color: #000;
  text-decoration: none;
`;
const ProductTitle = styled.h3`
  margin-bottom: 0;
`;

const ProductID = styled.p`
  margin-top: 5px;
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
  font-weight: 500;
`;

const ProductConfig = styled.div`
  border: 1px solid #000;
  background-color: #f2f2f2;
  border: 1px solid #d8d8d8;
  border-bottom: 1px solid #000;
`;
const Config = styled.p`
  margin: 0;
  padding: 5px 10px;
  font-size: 12px;
  font-weight: 700;
`;

const ProductGift = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.05);
  margin: 15px;
`;
const Gift = styled.p`
  margin: 0;
  font-size: 14px;
  padding: 5px 0 5px 15px;
  font-weight: 500;
`;

const ProductPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: relative;
  width: 100%;
`;
const ProductNotifPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const Stored = styled.p`
  margin: 0;
  font-size: 12px;
  color: #cc0000;
`;
const Price = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 15px;
`;
const Sale = styled.span`
  padding: 1px 10px;
  background-color: red;
  color: #fff;
  border-radius: 5px;
  font-weight: 500;
`;
const MainPrice = styled.span`
  font-size: 20px;
  font-weight: 600;
`;
const Tax = styled.span`
  font-size: 13px;
  color: #7d7d7d;
`;
const MiddleLine = styled.span`
  text-decoration: line-through;
`;

const ProductButton = styled.button`
  /* width: 80%; */
  border: 1px solid #000;
  background-color: transparent;
  width: 100%;
  height: 45px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 600;
  transition: all ease 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #0066cc;
    color: #fff;
    border: none;
  }
`;

export {
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
};
