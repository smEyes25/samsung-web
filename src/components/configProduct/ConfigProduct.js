import React from "react";
import {
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
  Image,
  TitleImage,
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
  TotalPrice,
  BuyNow,
  IconShare,
  NameAndId,
  ConfigAndPrice,
  TitleTotal,
  TotalPriceProduct,
  PriceMonthOrTotal,
  Time,
  NameProduct,
  IdProduct,
  ConfigProducts,
  PriceProduct,
  LineThroughPrice,
} from "./styles";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ConfirmationNumberOutlinedIcon from "@mui/icons-material/ConfirmationNumberOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";

const ConfigProduct = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <WrapperConfig>
            <ConfigName>
              <Name>Thiết bị</Name>
              <Desc>Vui lòng chọn thiết bị</Desc>
            </ConfigName>

            <Selections>
              <Selection>
                <NameConfig>Galaxy S22 Ultra</NameConfig>
                <Price>2.415.952 đ/tháng hoặc</Price>
                <Price>28.991.426 đ</Price>
              </Selection>
            </Selections>
          </WrapperConfig>

          <WrapperConfig>
            <ConfigName>
              <Name>Dung lượng lưu trữ</Name>
            </ConfigName>

            <Selections>
              <Selection>
                <NameConfig>128GB | 8GB</NameConfig>
                <Price>2.415.952 đ/tháng hoặc</Price>
                <Price>28.991.426 đ</Price>
              </Selection>
              <Selection>
                <NameConfig>128GB | 8GB</NameConfig>
                <Price>2.415.952 đ/tháng hoặc</Price>
                <Price>28.991.426 đ</Price>
              </Selection>
              <Selection>
                <NameConfig>128GB | 8GB</NameConfig>
                <Price>2.415.952 đ/tháng hoặc</Price>
                <Price>28.991.426 đ</Price>
              </Selection>
            </Selections>
          </WrapperConfig>

          <WrapperConfig>
            <TitleImage>
              <Name>Màu sắc</Name>
              <Image src="https://images.samsung.com/vn/smartphones/galaxy-s22-ultra/buy/S22Ultra_ColorSelection_Burgundy_MO.jpg?imwidth=480" />
            </TitleImage>

            <Colors>
              <Color>
                <LineOfColor>
                  <ColorDisplay color="red" />
                </LineOfColor>
                <NameColor>Đỏ</NameColor>
                <NameColor>Burgundy</NameColor>
              </Color>
              <Color>
                <LineOfColor>
                  <ColorDisplay color="black" />
                </LineOfColor>
                <NameColor>Đen</NameColor>
                <NameColor>Phantom</NameColor>
              </Color>
              <Color>
                <LineOfColor>
                  <ColorDisplay color="white" />
                </LineOfColor>
                <NameColor>Trắng</NameColor>
                <NameColor>Phantom</NameColor>
              </Color>
              <Color>
                <LineOfColor>
                  <ColorDisplay color="green" />
                </LineOfColor>
                <NameColor>Xanh</NameColor>
                <NameColor>Zeta</NameColor>
              </Color>
            </Colors>
          </WrapperConfig>

          <WrapperConfig>
            <IconTitle>
              <Icon src="https://www.samsung.com/etc.clientlibs/samsung/clientlibs/consumer/global/clientlib-common/resources/images/offer-icon-care.png" />
              <Name>Samsung Care+</Name>
            </IconTitle>

            <MoreConfig>
              <MoreInfo>
                <Info>
                  Bảo vệ thiết bị của bạn khỏi hư hỏng (dính nước và vỡ màn
                  hình) lên đến (2) năm
                </Info>
                <SeeMore href="#">Tìm hiểu thêm</SeeMore>
              </MoreInfo>

              <Selections>
                <SaleOff>
                  <NameConfig>
                    Samsung Care+ gói 1 năm (Điện thoại cao cấp)
                  </NameConfig>
                  <Price>2.415.952 đ/tháng hoặc 28.991.426 đ</Price>
                </SaleOff>
                <SaleOff>
                  <NameConfig>
                    Samsung Care+ gói 2 năm (Điện thoại cao cấp)
                  </NameConfig>
                  <Price>2.415.952 đ/tháng hoặc 28.991.426 đ</Price>
                </SaleOff>
                <SaleOff>
                  <NameConfig>Không cảm ơn</NameConfig>
                </SaleOff>
              </Selections>
            </MoreConfig>
          </WrapperConfig>

          <WrapperBackground>
            <WrapperEdow>
              <IconTitle>
                <CardGiftcardIcon />
                <Name>Ưu đãi độc quyền</Name>
              </IconTitle>

              <Edows>
                <Edow>
                  <EdowImage src="https://images.samsung.com/is/image/samsung/assets/vn/smartphones/galaxy-s22/buy/new_160x160.png" />
                  <EdowInfo>
                    <EdowMain>Ưu đãi đặc quyền</EdowMain>
                    <EdowTitle>Ưu đãi trực tiếp 2 Triệu.</EdowTitle>
                    <SeeMore href="#">Tìm hiểu thêm</SeeMore>
                  </EdowInfo>
                </Edow>
                <Edow>
                  <EdowImage src="https://images.samsung.com/vn/smartphones/galaxy-s22/buy/Offer_Tile_R0G0_B0_BestValueGuarantee_MO.png" />
                  <EdowInfo>
                    <EdowMain>Ưu đãi đặc quyền</EdowMain>
                    <EdowTitle>Thu cũ đổi mới</EdowTitle>
                    <SeeMore href="#">Tìm hiểu thêm</SeeMore>
                  </EdowInfo>
                </Edow>
              </Edows>
            </WrapperEdow>

            <WrapperEdow>
              <IconTitle>
                <ConfirmationNumberOutlinedIcon />
                <Name>Lợi thế chính hãng</Name>
              </IconTitle>

              <Selections>
                <Benefit>
                  <BenefitImage src="https://images.samsung.com/vn/smartphones/galaxy-s22/buy/Financing_PC_2x.jpg?$330_N_JPG$" />
                  <BenefitInfo>
                    <BenefitIcon>
                      <AccountBalanceWalletOutlinedIcon />
                    </BenefitIcon>
                    <BenefitTitle>Trả góp</BenefitTitle>
                  </BenefitInfo>
                  <BenefitDesc>
                    Trả góp 0% lãi suất khi thanh toán bằng thẻ tín dụng.
                  </BenefitDesc>
                  <BenefitLink href="#">Tìm hiểu thêm</BenefitLink>
                </Benefit>
                <Benefit>
                  <BenefitImage src="https://images.samsung.com/vn/smartphones/galaxy-s22/buy/Samsung_Rewards_PC_2x.jpg?$330_N_JPG$" />
                  <BenefitInfo>
                    <BenefitIcon>
                      <AccountBalanceWalletOutlinedIcon />
                    </BenefitIcon>
                    <BenefitTitle>Trả góp</BenefitTitle>
                  </BenefitInfo>
                  <BenefitDesc>
                    Tích lũy 1% điểm Samsung Rewards. Lưu ý đăng nhập Samsung
                    Account trước khi đặt hàng.
                  </BenefitDesc>
                  <BenefitLink href="#">Tìm hiểu thêm</BenefitLink>
                </Benefit>
                <Benefit>
                  <BenefitImage src="https://images.samsung.com/vn/smartphones/galaxy-s22/buy/FreeDelivery_PC_2x.jpg?$330_N_JPG$" />
                  <BenefitInfo>
                    <BenefitIcon>
                      <AccountBalanceWalletOutlinedIcon />
                    </BenefitIcon>
                    <BenefitTitle>Trả góp</BenefitTitle>
                  </BenefitInfo>
                  <BenefitDesc>Miễn phí giao hàng toàn quốc</BenefitDesc>
                  <BenefitLink href="#">Tìm hiểu thêm</BenefitLink>
                </Benefit>
              </Selections>
            </WrapperEdow>
          </WrapperBackground>

          <WrapperBackground>
            <WrapperPayment>
              <WrapperNamePayment>
                <NamePayment>
                  <IconShare>
                    <ShareOutlinedIcon />
                  </IconShare>
                  <NameAndId>
                    <NameProduct>Galaxy S22 Ultra</NameProduct>
                    <IdProduct>SM-S908EDRDXXV</IdProduct>
                  </NameAndId>
                  <ConfigAndPrice>
                    <ConfigProducts>128GB | 8GB | Đỏ Burgundy</ConfigProducts>
                    <PriceProduct>
                      <LineThroughPrice>30.990.300 đ</LineThroughPrice>{" "}
                      28.991.426 đ
                    </PriceProduct>
                  </ConfigAndPrice>
                </NamePayment>
              </WrapperNamePayment>

              <TotalPrice>
                <TitleTotal>Tổng cộng</TitleTotal>

                <TotalPriceProduct>
                  <PriceMonthOrTotal>
                    2.415.952 đ/tháng hoặc 28.991.426 đ
                  </PriceMonthOrTotal>
                  <Time>12 tháng trả góp ở mức lãi suất 0% Mua ngay</Time>
                </TotalPriceProduct>
              </TotalPrice>

              <BuyNow>Mua ngay</BuyNow>
            </WrapperPayment>
          </WrapperBackground>
        </Wrapper>
      </Container>
    </>
  );
};

export default ConfigProduct;
