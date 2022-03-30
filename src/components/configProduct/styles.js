import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;
const Wrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  box-sizing: border-box;
  /* border: 1px solid #000; */
`;

//EQUIPMENT
const WrapperConfig = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  /* gap: 100px; */
  padding: 10px 0;
  max-width: 1200px;
  margin: auto;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 30px 0;

  &:nth-child(4) {
    justify-content: space-between;
    border-bottom: none;
  }
`;
const ConfigName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
const Name = styled.h3`
  margin: 0;
  font-weight: 500;
`;
const Desc = styled.p`
  margin: 0;
  font-weight: 200;
`;

const Selections = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  gap: 10px;
`;
const Selection = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
  padding: 7px 90px 7px 10px;
  border-radius: 5px;
  cursor: pointer;

  &:first-child {
    border: 2px solid #004dff;
  }
`;
const NameConfig = styled.h3`
  margin: 0;
  font-size: 15px;
  opacity: 0.7;
`;
const Price = styled.span`
  font-weight: 400;
  font-size: 15px;
`;

//COLOR
const TitleImage = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 198px;
  padding-right: 30px;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
`;
const Image = styled.img`
  width: 500px;
`;

const Colors = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const LineOfColor = styled.div``;
const NameColor = styled.span``;
const Color = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 30px;

  &:first-child ${LineOfColor} {
    padding: 3px;
    border: 2px solid #004dff;
    border-radius: 50%;
  }
  &:first-child ${NameColor} {
    font-weight: 700;
  }
`;
const ColorDisplay = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  ${(prop) => {
    if (prop.color === "white") {
      return { border: "1px solid #000" };
    }
    return { backgroundColor: `${prop.color}` };
  }}
`;

//SAMSUNG CARE
const IconTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Icon = styled.img`
  width: 25px;
  height: 25px;
`;

const MoreConfig = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  position: relative;
`;
const MoreInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Info = styled.span`
  font-weight: 200;
  color: #004dff;
`;
const SeeMore = styled.a`
  font-weight: 500;
  color: #000;
`;

const SaleOff = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 270px;
  height: 100px;
  gap: 50px;
  padding: 0 20px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
`;

//SALE OFF
const WrapperBackground = styled.div`
  max-width: 1300px;
  background-color: rgba(0, 0, 0, 0.03);
  margin: 20px auto;
`;
const WrapperEdow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  max-width: 1200px;
  margin: auto;
  padding: 30px 0;
  gap: 70px;
`;
const Edows = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 1;

  gap: 10px;
`;
const Edow = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
  padding: 10px 0 10px 20px;
  margin-right: 20px;
`;
const EdowImage = styled.img`
  width: 140px;
  height: 140px;
`;
const EdowInfo = styled.div`
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;
const EdowMain = styled.span`
  font-size: 12px;
  color: #fff;
  font-weight: 500;
  padding: 3px 5px;
  background-color: #004dff;
  opacity: 0.7;
  border-radius: 10px;
`;
const EdowTitle = styled.h2`
  margin: 0;
  font-weight: 500;
`;

//BENEFIT
const BenefitInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 20px 0 0 20px;
`;
const BenefitDesc = styled.p`
  margin: 0;
  padding: 10px 0 50px 20px;
  font-size: 15px;
  font-weight: 200;
`;
const Benefit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 200px;
  height: 450px;
  cursor: pointer;
  background-color: #fff;
  width: 305px;
  border-radius: 20px;
  position: relative;
`;
const BenefitImage = styled.img`
  width: 100%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;
const BenefitIcon = styled.div`
  background-color: #004dff;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: rgba(255, 255, 255, 0.8);
  padding: 3px;
`;

const BenefitTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 500;
`;
const BenefitLink = styled.a`
  text-align: center;
  margin: 0 auto;
  font-weight: 500;
  color: #000;
  padding-bottom: 20px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;

//PAYMENT
const WrapperPayment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  /* justify-content: space-between; */
  max-width: 1200px;
  margin: auto;
  padding: 30px 0;
  gap: 70px;
  position: relative;

  &:last-child {
    gap: 0;
  }
`;
const WrapperNamePayment = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const NamePayment = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;
const IconShare = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  cursor: pointer;
  /* border: 1px solid #000; */
`;

const NameAndId = styled.div`
  /* border: 1px solid #000; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 15px;
`;
const NameProduct = styled.h3`
  margin: 0;
  font-weight: 500;
  font-size: 18px;
`;
const IdProduct = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 200;
`;

const ConfigAndPrice = styled.div`
  /* border: 1px solid #000; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
`;
const ConfigProducts = styled.span`
  font-size: 14px;
  font-weight: 200;
`;
const PriceProduct = styled.span`
  font-size: 14px;
  font-weight: 500;
`;
const LineThroughPrice = styled.span`
  text-decoration: line-through;
  font-size: 12px;
  font-weight: 200;
`;

const TotalPrice = styled.div`
  /* border: 1px solid #000; */
  width: 40%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 50px 0;
`;
const TitleTotal = styled.h2`
  font-size: 21px;
  font-weight: 500;
  margin: 0;
`;
const TotalPriceProduct = styled.div`
  /* border: 1px solid #000; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const PriceMonthOrTotal = styled.h2`
  font-size: 21px;
  font-weight: 500;
  margin: 0;
`;
const Time = styled.span`
  font-size: 12px;
  font-weight: 200;
  margin: 0;
`;

const BuyNow = styled.button`
  width: 40%;
  border: none;
  background-color: #004dff;
  color: #fff;
  height: 40px;
  border-radius: 20px;
  opacity: 0.7;
  font-weight: 700;
  cursor: pointer;
  transition: all ease 0.2s;

  &:hover {
    opacity: 1;
  }
`;

export {
  Container,
  Wrapper,
  WrapperConfig,
  ConfigName,
  Name,
  Desc,
  Selections,
  Selection,
  NameConfig,
  Price,
  TitleImage,
  Image,
  Colors,
  Color,
  LineOfColor,
  ColorDisplay,
  NameColor,
  IconTitle,
  Icon,
  MoreConfig,
  MoreInfo,
  Info,
  SeeMore,
  SaleOff,
  WrapperBackground,
  WrapperEdow,
  Edow,
  Edows,
  EdowImage,
  EdowInfo,
  EdowMain,
  EdowTitle,
  Benefit,
  BenefitIcon,
  BenefitImage,
  BenefitInfo,
  BenefitTitle,
  BenefitDesc,
  BenefitLink,
  WrapperPayment,
  WrapperNamePayment,
  NamePayment,
  IconShare,
  NameAndId,
  NameProduct,
  IdProduct,
  ConfigAndPrice,
  ConfigProducts,
  PriceProduct,
  LineThroughPrice,
  TotalPrice,
  TitleTotal,
  TotalPriceProduct,
  PriceMonthOrTotal,
  Time,
  BuyNow,
};
