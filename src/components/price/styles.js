import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 5px;
  /* border: 1px solid black; */
`;

//TITLE
const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* border: 1px solid black; */
`;
const Title = styled.h3`
  font-weight: 500;
  margin: 0;
  color: #0066cc;
`;
const Name = styled.a`
  font-size: 22px;
  font-weight: 700;
`;

//PRICE
const WrapperTotalPrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const TotalPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  /* border: 1px solid black; */
`;

const OldPrice = styled.span`
  font-size: 15px;
  opacity: 0.7;
`;
const SavePrice = styled.span`
  font-size: 25px;
  font-weight: 500;
  color: #004dff;
`;
const LineThroughPrice = styled.span`
  text-decoration: line-through;
`;
const MainPrice = styled.span`
  font-size: 20px;
  opacity: 0.9;
`;

const BuyButton = styled.button`
  border: none;
  background-color: #004dff;
  opacity: 0.7;
  color: #fff;
  font-weight: 700;
  padding: 12px 50px;
  border-radius: 20px;
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export {
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
};
