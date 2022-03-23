import React from "react";
import {
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
} from "./styles";

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Bạn Cần Hỗ Trợ</Title>

        <WrapperContact>
          <Contacts>
            <ContactImage src="https://au2-images.shop.samsung.com/medias/phone-support-icon.png?context=bWFzdGVyfGltYWdlc3wyODI0fGltYWdlL3BuZ3xpbWFnZXMvaGYxL2gzOC84Nzk2MTY5ODYzMTk4LnBuZ3xlOTZmYzM3OThhZTcyMzA2Zjc0MWM1ZDQ4OTViM2NmNGFjMDM3ZTZkOWNmYWY1Njg3MWU5YjcxNzgzYWMzMWIw" />
            <ContactTitle>
              HỖ TRỢ QUA ĐIỆN <Br /> THOẠI
            </ContactTitle>
            <ContactInfo>
              <ContactLink href="#">GỌI 1800 588 889 (- NHÁNH 6)</ContactLink>
            </ContactInfo>
          </Contacts>

          <Contacts>
            <ContactImage src="https://au2-images.shop.samsung.com/medias/Search-icon-1-.png?context=bWFzdGVyfGltYWdlc3wzNTMzfGltYWdlL3BuZ3xoMmIvaGJkLzExNTc1NzAwMTYwNTQyL1NlYXJjaC1pY29uICgxKS5wbmd8MmM5ZWMxNmMxZjAxMmI3OGZjNjgyZWJlMDllMjlmMzA5ZGJkNmIyOTQ5MTczMTUzMGRkYTJiMzIwYWU5ODQyZA" />
            <ContactTitle>
              HỖ TRỢ <Br /> TRỰC TUYẾN
            </ContactTitle>
            <ContactInfo>
              <ContactLink href="#">TIẾN HÀNH TRAO ĐỔI TRỰC TUYẾN</ContactLink>
            </ContactInfo>
          </Contacts>

          <Contacts>
            <ContactImage src="https://au2-images.shop.samsung.com/medias/mail-icon.png?context=bWFzdGVyfGltYWdlc3wxNzIxfGltYWdlL3BuZ3xpbWFnZXMvaDA3L2gzMS84Nzk2MTY5NTM1NTE4LnBuZ3w5ZTk3YWMxNjkyN2E2NjUwNTQwNjVjNGY0NmFlZjg1NTIwZjU1OWE3Y2YwNjY5N2JkOTQ4ODEwN2RkOTJiMWIw" />
            <ContactTitle>
              HỖ TRỢ QUA <Br /> EMAIL
            </ContactTitle>
            <ContactInfo>
              <ContactLink href="#">GỬI MAIL CHO CHÚNG TÔI</ContactLink>
            </ContactInfo>
          </Contacts>

          <Contacts>
            <ContactImage src="https://au2-images.shop.samsung.com/medias/tick-icon.png?context=bWFzdGVyfGltYWdlc3wxNzY3fGltYWdlL3BuZ3xoNWQvaDQ2LzExNTc1NzAxNTA0MDMwL3RpY2staWNvbi5wbmd8YTBhOGIzMWQ2MjczYzgyZDg1OGE1NjZmYmJlOTNkM2YxOTg5ZWI4ZTkxOTQ3NGY5YmQxYzEyMTgwYjY3MTNlNQ" />
            <ContactTitle>
              TRÒ CHUYỆN <Br /> CÙNG CHUYÊN GIA
            </ContactTitle>
            <ContactInfo>
              <ContactLink href="#">TÌM HIỂU THÊM</ContactLink>
            </ContactInfo>
          </Contacts>
        </WrapperContact>
      </Wrapper>
    </Container>
  );
};

export default Contact;
