import styled from "styled-components";

const Container = styled.div`
  /* border: 1px solid black; */
  width: 100%;
`;
const Wrapper = styled.div`
  /* border: 1px solid black; */
  position: relative;
  &::before {
    content: "";
    width: 60px;
    height: 150px;
    position: absolute;
    background-color: rgba(235, 235, 235, 0.3);
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    z-index: 10;
    border-radius: 0 10px 10px 0;
    cursor: pointer;
  }
  &::after {
    content: "";
    width: 60px;
    height: 150px;
    position: absolute;
    background-color: rgba(235, 235, 235, 0.3);
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    z-index: 10;
    border-radius: 10px 0 0 10px;
    cursor: pointer;
  }
`;
const ArrowLeft = styled.div`
  position: absolute;
  top: 50%;
  right: 0.7%;
  transform: translateY(-50%);
  z-index: 11;
`;
const ArrowRight = styled.div`
  position: absolute;
  top: 50%;
  left: 0.7%;
  transform: translateY(-50%);
  z-index: 11;
`;

//IMAGE
const Image = styled.img`
  position: relative;
  width: 100%;
`;

//BUTTON
const Button = styled.button`
  position: absolute;
  z-index: 11;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  border: 1px solid #000;
  background-color: transparent;
  width: 150px;
  height: 45px;
  border-radius: 30px;
  font-size: 13px;
  font-weight: 600;
  transition: all ease 0.5s;
  cursor: pointer;

  &:hover {
    background-color: #0066cc;
    color: #fff;
    border: none;
  }
`;

export { Container, Wrapper, ArrowLeft, ArrowRight, Image, Button };
