import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* border: 1px solid #000; */

  padding-bottom: 200px;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  /* border: 1px solid #000; */
  margin: auto;
`;

//RETURN
const ContainerReturn = styled.div`
  width: 100%;
  border-bottom: 1px solid #dfdfdf;
`;
const WrapperReturn = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* border-bottom: 1px solid #000; */
  padding: 20px 0;
`;
const ReturnLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 200;
  gap: 10px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
`;

//SUPPORT
const WrapperSupport = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, auto);
  padding: 0;
  margin: 0;
`;
const Support = styled.li`
  list-style: none;
  border-left: 1px solid #dfdfdf;
  padding: 20px 0 20px 10px;

  &:first-child {
    border-left: none;
  }
`;
const Title = styled.h3`
  font-weight: 500;
  margin: 0 0 15px 0;
`;

const WrapperInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  gap: 7px;
`;
const Info = styled.a`
  text-decoration: none;
  font-weight: 400;
  color: #000;
  font-size: 14px;

  &:hover {
    text-decoration: underline;
  }
`;

//CONTACT INFO
const ContainerContact = styled.div`
  width: 100%;
  border-top: 1px solid #dfdfdf;
  border-bottom: 1px solid #dfdfdf;
`;
const WrapperContact = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20px;
`;
const ListContact = styled.div``;
const Contacts = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 300;
`;
const WrapperImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Image = styled.img``;

//MORE INFO
const WrapperMoreInfo = styled.div`
  max-width: 1440px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
`;
const MoreInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
const MoreInfo = styled.p`
  font-size: 12px;
`;
const MoreInfoLink = styled.a`
  font-size: 13px;
  font-weight: 600;
  color: #000;
  text-decoration: none;

  &:not(:first-child):hover {
    text-decoration: underline;
  }

  &:first-child {
    border-right: 1px solid #dfdfdf;
    padding-right: 20px;
  }
`;

export {
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
};
