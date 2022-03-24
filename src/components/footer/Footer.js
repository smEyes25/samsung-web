import React from "react";
import {
  Container,
  Wrapper,
  ContainerReturn,
  WrapperReturn,
  ReturnLink,
  WrapperSupport,
  Support,
  Title,
  WrapperInfo,
  Info,
  ContainerContact,
  WrapperContact,
  ListContact,
  Contacts,
  WrapperImage,
  Image,
  WrapperMoreInfo,
  MoreInfos,
  MoreInfo,
  MoreInfoLink,
} from "./styles";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import { supportData, contacts } from "../../data/Supportdata";

const Footer = () => {
  return (
    <Container>
      <ContainerReturn>
        <WrapperReturn>
          <ReturnLink href="#">
            Trở lại đầu trang <KeyboardArrowUpIcon />
          </ReturnLink>
        </WrapperReturn>
      </ContainerReturn>
      <Wrapper>
        <WrapperSupport>
          {supportData.map((data) => (
            <Support>
              <Title>{data.title}</Title>
              <WrapperInfo>
                {data.infos.map((info) => (
                  <Info href="#">{info}</Info>
                ))}
              </WrapperInfo>
            </Support>
          ))}
        </WrapperSupport>
      </Wrapper>

      <ContainerContact>
        <WrapperContact>
          <ListContact>
            {contacts.map((contact) => (
              <Contacts>{contact}</Contacts>
            ))}
          </ListContact>

          <WrapperImage>
            <Image src="https://images.samsung.com/is/image/samsung/assets/vn/p6_gro1/p6_initial_footer/gov-logos-3.png" />
            <Image src="https://images.samsung.com/is/image/samsung/assets/vn/p6_gro1/p6_initial_footer/gov-logos-2.png" />
            <Image src="https://images.samsung.com/is/image/samsung/assets/vn/p6_gro1/p6_initial_footer/gov-logos-1.png" />
          </WrapperImage>
        </WrapperContact>
      </ContainerContact>

      <WrapperMoreInfo>
        <MoreInfos>
          <MoreInfoLink href="#">Việt Nam/Vietnamese</MoreInfoLink>
          <MoreInfoLink href="#">Trợ Giúp Truy Cập</MoreInfoLink>
          <MoreInfoLink href="#">Điều Khoản & Điều Kiện</MoreInfoLink>
          <MoreInfoLink href="#">Bảo Mật</MoreInfoLink>
          <MoreInfoLink href="#">Pháp Lý</MoreInfoLink>
        </MoreInfos>
        <MoreInfos>
          <MoreInfo>Kết Nối với Chúng Tôi</MoreInfo>
          <MoreInfoLink href="#">
            <FacebookOutlinedIcon />
          </MoreInfoLink>
          <MoreInfoLink href="#">
            <YouTubeIcon />
          </MoreInfoLink>
          <MoreInfoLink href="#">
            <InstagramIcon />
          </MoreInfoLink>
        </MoreInfos>
      </WrapperMoreInfo>
    </Container>
  );
};

export default Footer;
