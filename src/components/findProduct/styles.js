import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid black; */
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
`;

//TITLE
const Title = styled.h2`
  font-weight: 500;
`;

//LIST ITEM
const ListItem = styled.ul`
  /* border: 1px solid black; */
  position: relative;
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`;
const Item = styled.li`
  list-style: none;
`;
const ItemLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #000;
`;
const ItemImage = styled.img`
  width: 70px;
  height: 70px;
`;
const ItemName = styled.p`
  font-weight: 700;
  font-size: 13px;
`;

//SALE
const WrapperSale = styled.ul`
  /* border: 1px solid black; */
  position: relative;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  padding: 20px 0;
`;

const SaleLink = styled.a`
  position: absolute;
  left: 15%;
  bottom: 15%;
  font-size: 12px;
`;
const SaleImage = styled.img`
  width: 350px;
  height: 350px;
  transition: all ease 0.5s;
`;
const Sale = styled.li`
  width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  overflow: hidden;

  & ${SaleLink} {
    color: #000;
  }
  &:nth-child(3) ${SaleLink} {
    color: #fff;
  }
  &:hover ${SaleImage} {
    transform: scale(1.1);
  }
`;

//MORE
const ContainerMore = styled.div`
  /* border: 1px solid black; */
  position: relative;
`;
const MoreImage = styled.img`
  padding: 10px 0;
  width: 100%;
`;
const MoreLink = styled.a`
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  color: #000;
  font-size: 13px;
  font-weight: 600;
`;

export {
  Container,
  Wrapper,
  Title,
  ListItem,
  Item,
  ItemName,
  ItemImage,
  ItemLink,
  WrapperSale,
  Sale,
  SaleImage,
  SaleLink,
  ContainerMore,
  MoreImage,
  MoreLink,
};
