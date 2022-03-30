import React from "react";
import {
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
} from "./styles";
import LogoImg from "../../picture/logo.png";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

const Narbar = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperLogo href="#">
          <Link to="/">
            <Logo src={LogoImg} />
          </Link>
        </WrapperLogo>

        <MenuItem>
          <Item>
            <ItemClicked href="#">Di Động</ItemClicked>
          </Item>
          <Item>
            <ItemClicked href="#">TV & AV</ItemClicked>
          </Item>
          <Item>
            <ItemClicked href="#">Gia Dụng</ItemClicked>
          </Item>
          <Item>
            <ItemClicked href="#">Smart Home</ItemClicked>
          </Item>
          <Item>
            <ItemClicked href="#">Màn Hình</ItemClicked>
          </Item>
          <Item>
            <ItemClicked href="#">Mua Trực Tuyến</ItemClicked>
          </Item>
        </MenuItem>

        <MenuItem>
          <Item>
            <ItemClicked href="#">Khám Phá</ItemClicked>
          </Item>
          <Item>
            <ItemClicked href="#">Ưu Đãi</ItemClicked>
          </Item>
          <Item>
            <ItemClicked href="#">Hỗ Trợ</ItemClicked>
          </Item>
          <Item>
            <ItemClicked href="#">Doanh Nghiệp</ItemClicked>
          </Item>
        </MenuItem>

        <MenuInfo>
          <Info>
            <InfoClicked href="#">
              <AccountCircleOutlinedIcon />
            </InfoClicked>
            <WrapperLogin>
              <Login>
                <Content>
                  <AccountCircleOutlinedIcon />
                  <Link to="/signin" style={{ textDecoration: "none" }}>
                    <ContentClick href="#">Đăng nhập</ContentClick>
                  </Link>
                  /
                  <Link to="/signin" style={{ textDecoration: "none" }}>
                    <ContentClick href="#">Sign-Up</ContentClick>
                  </Link>
                </Content>
                <Content>
                  <ContentClick href="#">Đơn hàng</ContentClick>
                </Content>
              </Login>
            </WrapperLogin>
          </Info>
          <Info>
            <InfoClicked href="#">
              <SearchOutlinedIcon />
            </InfoClicked>
          </Info>
          <Info>
            <InfoClicked href="#">
              <ShoppingCartOutlinedIcon />
            </InfoClicked>
          </Info>
        </MenuInfo>
      </Wrapper>
    </Container>
  );
};

export default Narbar;
