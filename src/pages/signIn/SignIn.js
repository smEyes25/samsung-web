import React from "react";
import {
  Container,
  Wrapper,
  WrapperSignIn,
  Title,
  WrapperForm,
  FormFill,
  PlaceHolder,
  Br,
  WrapperInput,
  RadioButton,
  Hint,
  Button,
  WrapperForgot,
  ForgotContent,
  ForgotLink,
  ButtonSignInWith,
  ImageLogo,
} from "./styles";

const SignIn = () => {
  return (
    <Container>
      <Wrapper>
        <WrapperSignIn>
          <Title>
            Đăng nhập Samsung <Br /> account của bạn
          </Title>

          <WrapperForm>
            <FormFill>
              <PlaceHolder>Email</PlaceHolder>
            </FormFill>
            <FormFill>
              <PlaceHolder>Mật khẩu</PlaceHolder>
            </FormFill>
          </WrapperForm>

          <WrapperInput>
            <RadioButton type="checkbox" /> <Hint>Nhớ ID của tôi</Hint>
          </WrapperInput>
          <Button>Đăng nhập</Button>

          <WrapperForgot>
            <ForgotContent>
              <ForgotLink href="#">Tìm ID </ForgotLink>hoặc{" "}
              <ForgotLink href="#">Đặt lại mật khẩu</ForgotLink>
            </ForgotContent>
            <ForgotContent>
              <ForgotLink href="#">Tạo tài khoản</ForgotLink>
            </ForgotContent>
          </WrapperForgot>

          <ButtonSignInWith>
            <ImageLogo src="https://account.samsung.com/accounts/v1/resources/one-ui/images/layout/google.png" />
            Đăng nhập bằng Google
          </ButtonSignInWith>
          <ButtonSignInWith>
            <ImageLogo src="https://account.samsung.com/accounts/v1/resources/one-ui/images/layout/qr-code-icon.png" />{" "}
            Đăng nhập bằng mã QR
          </ButtonSignInWith>
        </WrapperSignIn>
      </Wrapper>
    </Container>
  );
};

export default SignIn;
