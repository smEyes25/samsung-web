import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  /* background-color: #000; */
`;
const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  position: relative;
  /* border: 1px solid black; */
`;

const Image = styled.img`
  width: 100%;
`;

const ButtonLeft = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`;
const ButtonRight = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  cursor: pointer;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;

export { Container, Wrapper, Image, ButtonLeft, ButtonRight };
