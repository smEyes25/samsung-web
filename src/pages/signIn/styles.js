import styled from "styled-components";

const Container = styled.div`
  background-color: #171717;
  height: 100vh;
`;
const Wrapper = styled.div`
  width: 65%;
  /* border: 1px solid #fff; */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

//SIGNIN
const WrapperSignIn = styled.div`
  margin: auto;
  padding: 50px 0;
  width: 35%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 400;
  text-align: center;
  color: #7097ff;
`;
const Br = styled.br``;

const WrapperForm = styled.div`
  width: 100%;
`;
const FormFill = styled.div`
  padding: 15px 0 15px 0;
  margin-bottom: 20px;
  border-bottom: 1px solid #c0c0c0;
`;
const PlaceHolder = styled.span`
  color: #c0c0c0;
  font-size: 20px;
`;
const RadioButton = styled.input`
  background: transparent;
  border: 1px solid #c0c0c0;
  border-radius: 50%;
  width: 20px;
  height: 20px;
`;
const Hint = styled.span`
  color: #fff;
  font-size: 18px;
`;
const WrapperInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  width: 100%;
  margin-bottom: 30px;
`;

const Button = styled.button`
  font-weight: 700;
  background-color: #5d5d5d;
  color: #fff;
  border: none;
  margin: auto;
  width: 280px;
  height: 45px;
  border-radius: 20px;
  cursor: pointer;
`;

const WrapperForgot = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  width: 280px;
  font-weight: 700;
  padding: 30px 0;
`;
const ForgotContent = styled.p`
  font-size: 15px;
  color: #5d5d5d;
  margin: 0;
`;
const ForgotLink = styled.a`
  color: #5d5d5d;
`;

const ButtonSignInWith = styled.button`
  font-weight: 700;
  background-color: #0074d4;
  color: #fff;
  border: none;
  margin: auto;
  width: 280px;
  height: 45px;
  border-radius: 20px;
  margin-bottom: 30px;
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;
const ImageLogo = styled.img`
  height: 35px;
  width: 35px;
`;

export {
  Container,
  Wrapper,
  WrapperSignIn,
  Title,
  Br,
  FormFill,
  WrapperForm,
  PlaceHolder,
  WrapperInput,
  RadioButton,
  Hint,
  Button,
  WrapperForgot,
  ForgotContent,
  ForgotLink,
  ButtonSignInWith,
  ImageLogo,
};
