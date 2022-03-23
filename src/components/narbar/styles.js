import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  /* border: 1px solid black; */
  max-width: 1440px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

//LOGO
const WrapperLogo = styled.a`
  display: block;
`;
const Logo = styled.img`
  width: 180px;
  height: 25px;
  display: block;
`;

//MENU PRODUCT
const MenuItem = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Item = styled.li`
  list-style: none;
`;
const ItemClicked = styled.a`
  text-decoration: none;
  font-weight: 500;
  font-size: 15px;
  display: block;
  padding: 7px 12px;
  border-radius: 20px;
  transition: all ease 0.3s;

  &:hover {
    color: #fff;
    background-color: #000;
  }
`;

//LOGIN
const WrapperLogin = styled.div`
  position: absolute;
  width: 200px;
  height: 120px;
  top: 0;
  right: 0;
  display: none;
  align-items: flex-end;
`;
const Login = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  border: 1px solid #c7c7c7;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 5px;
  padding: 0 10px;
  background-color: #fff;
`;
const Content = styled.p`
  margin: 0;
  display: flex;
  align-items: center;
`;
const ContentClick = styled.a`
  text-decoration: none;
  font-size: 15px;
  transition: all ease 0.5s;

  &:hover {
    color: #7b4aff;
  }
`;

//INFO
const MenuInfo = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;
const Info = styled.li`
  list-style: none;
  position: relative;
  transition: all ease 0.5s;
  z-index: 10;
  cursor: pointer;

  &:first-child:hover ${WrapperLogin} {
    display: flex;
  }

  &:not(:first-child):hover:after {
    content: "";
    width: 100%;
    height: 2px;
    background-color: #000;
    position: absolute;
    bottom: 0;
    left: 0;
    animation: increaseX 0.5s;
    animation-iteration-count: 1;

    @keyframes increaseX {
      from {
        width: 0%;
      }
      to {
        width: 100%;
      }
    }
  }
`;
const InfoClicked = styled.a`
  text-decoration: none;
  font-weight: 500;
  display: block;
`;

//DETAIL MENU
const ContainerDetailMenu = styled.div``;
const WrapperDetailMenu = styled.div``;
const TitleDetailMenu = styled.h2``;

const ContentDetailMenu = styled.div``;
const ListDetailMenu = styled.ul``;
const ItemDetailMenu = styled.li``;

const RepresentDetailMenu = styled.div``;
const ImageDetailMenu = styled.img``;
const NameItemDetailMenu = styled.p``;
const BuyNowDetailMenu = styled.a``;

export {
  Container,
  Wrapper,
  WrapperLogo,
  Logo,
  MenuItem,
  Item,
  ItemClicked,
  MenuInfo,
  WrapperLogin,
  Login,
  Content,
  ContentClick,
  Info,
  InfoClicked,
  ContainerDetailMenu,
  WrapperDetailMenu,
  TitleDetailMenu,
  ContentDetailMenu,
  ListDetailMenu,
  ItemDetailMenu,
  RepresentDetailMenu,
  ImageDetailMenu,
  NameItemDetailMenu,
  BuyNowDetailMenu,
};
