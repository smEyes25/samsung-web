import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* border: 1px solid black; */
`;
const Wrapper = styled.div`
  position: relative;
  max-width: 1440px;
  /* border: 1px solid black; */
  margin: auto;
  padding: 80px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
`;

//TITLE
const Title = styled.h1`
  font-weight: 600;
  margin: 0;
`;

//CONTACT
const WrapperContact = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin: 0;
  padding: 0;
`;
const Contacts = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  list-style: none;
  background-color: #f7f7f7;
  padding: 50px 10px;
  width: 200px;
  gap: 30px;
`;

const ContactImage = styled.img`
  height: 80px;
`;
const ContactTitle = styled.h3`
  font-weight: 400;
  text-align: center;
  margin: 0;
`;
const Br = styled.br``;
const ContactInfo = styled.div`
  padding: 0 20px;
  height: 34px;
`;
const ContactLink = styled.a`
  display: block;
  color: #000;
  text-align: center;
  font-size: 13px;
`;

export {
  Container,
  Wrapper,
  Title,
  WrapperContact,
  Contacts,
  ContactImage,
  ContactInfo,
  ContactTitle,
  ContactLink,
  Br,
};
