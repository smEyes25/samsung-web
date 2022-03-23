import React from "react";
import {
  Container,
  Wrapper,
  Title,
  ListItem,
  Item,
  ItemName,
  ItemImage,
  ItemLink,
  WrapperSale,
  Sale,
  SaleImage,
  SaleLink,
  ContainerMore,
  MoreImage,
  MoreLink,
} from "./styles";

const FindProduct = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Tìm ưu đãi theo loại sản phẩm</Title>
        <ListItem>
          <Item>
            <ItemLink href="#">
              <ItemImage src="https://au-images.shop.samsung.com/medias/galaxy-s-icon-mo.png?context=bWFzdGVyfGltYWdlc3w2NTN8aW1hZ2UvcG5nfGhmMi9oOTEvOTQ5NDg0MDkwMTY2Mi9nYWxheHktcy1pY29uLW1vLnBuZ3xlMjllZTZlNjYxZmIyYmIwYmY2NzQ1MWUxZTkyNTNhZmMxY2U2OTUxNDI5OTk3OGYzZGZiZjIxMGYwNjQzNzU3" />
              <ItemName>Điện thoại</ItemName>
            </ItemLink>
          </Item>
          <Item>
            <ItemLink href="#">
              <ItemImage src="https://au-images.shop.samsung.com/medias/galaxy-tab-a-icon-tablet.png?context=bWFzdGVyfGltYWdlc3w1MTB8aW1hZ2UvcG5nfGhlYS9oZWEvOTQ5NDg0MTQyNTk1MC9nYWxheHktdGFiLWEtaWNvbi10YWJsZXQucG5nfGU0MWEyZmM3YTMyM2UzOTFiNTYxNGMyNGE4ZTYzZTYyNjY0Njk5ZDdmNzgzYjI5NjgzMmE3Njk5ZWUyMWJhZTQ" />
              <ItemName>Máy tính bảng</ItemName>
            </ItemLink>
          </Item>
          <Item>
            <ItemLink href="#">
              <ItemImage src="https://au-images.shop.samsung.com/medias/Galaxy-Watch-3.png?context=bWFzdGVyfGltYWdlc3wzMDE0fGltYWdlL3BuZ3xoNTAvaGRkLzk1MTU5OTE5NTc1MzQvR2FsYXh5IFdhdGNoIDMucG5nfGJiZGZkZDBhYTFhYzQ3ODQzNDdlZmM2MzNjOWVlY2FlZTQwY2UxNWFjOGVkMGUwNGM4MDhjNGIyZjY4ZDBiMGU" />
              <ItemName>Thiết bị đeo</ItemName>
            </ItemLink>
          </Item>
          <Item>
            <ItemLink href="#">
              <ItemImage src="https://au-images.shop.samsung.com/medias/QLED-TV.png?context=bWFzdGVyfGltYWdlc3w3MjR8aW1hZ2UvcG5nfGhjMy9oY2YvOTUxNTk5MTU2NDMxOC9RTEVEIFRWLnBuZ3wyYjQ2NWM3ZGEzYjAzMzhjOTZlMDhlYzQzZTcxYTNkNGU3YWJkOTUwMGYxMzVkOGNjMDk5ZGNlMzNlN2YzNmJj" />
              <ItemName>Tivi</ItemName>
            </ItemLink>
          </Item>
          <Item>
            <ItemLink href="#">
              <ItemImage src="https://au-images.shop.samsung.com/medias/Fridge.png?context=bWFzdGVyfGltYWdlc3w1MTh8aW1hZ2UvcG5nfGhhMy9oNmYvOTUxNTk5MDgxMDY1NC9GcmlkZ2UucG5nfGY0OTIyMDAxMmRmMjg1NWJhMjMyNDRkMmI2ZDllNzc2ZjhkYTA4YTFlN2ExNzQxZjdhMTgzZmQwMjNjMDhjNjc" />
              <ItemName>Gia dụng</ItemName>
            </ItemLink>
          </Item>
          <Item>
            <ItemLink href="#">
              <ItemImage src="https://au-images.shop.samsung.com/medias/UHD.png?context=bWFzdGVyfGltYWdlc3w3NDN8aW1hZ2UvcG5nfGhiMS9oY2MvOTUxNTk5MTQ5ODc4Mi9VSEQucG5nfGNjMTM1ODc3YzU3NzZjZTBiZGFjZjVlNWU4OGRkNWNkOWQwNGU1NzQ5NDU5ZWM1NmRhNGRlMWI1YjllMzQyZjg" />
              <ItemName>Màn hình</ItemName>
            </ItemLink>
          </Item>
        </ListItem>

        <WrapperSale>
          <Sale>
            <SaleImage src="https://au2-images.shop.samsung.com/medias/Feature-650x650.jpg?context=bWFzdGVyfGltYWdlc3wyMDcwMjR8aW1hZ2UvanBlZ3xoZTgvaDk1LzEyMjYxMjQ3ODExNjE0L0ZlYXR1cmVfNjUweDY1MC5qcGd8ZWExMjAwYWRiNDI5ZmE0ZTk3NGYyMjA1ODllZDZjZGJlNzAzOWJkZjIwMWY5ZDQ1ZjA0MmE0MzYyMDdmMjlmNQ" />
            <SaleLink href="#">ĐẶT TRƯỚC NGAY</SaleLink>
          </Sale>
          <Sale>
            <SaleImage src="https://au2-images.shop.samsung.com/medias/Feature-650x650.jpg?context=bWFzdGVyfGltYWdlc3wxMzA3MzJ8aW1hZ2UvanBlZ3xoNjIvaDhhLzEyMjAwMDY2NDgyMjA2L0ZlYXR1cmVfNjUweDY1MC5qcGd8MzM2MGU3OTg4Mzg1ZTg2NTdhOGRiZjM0MDhjMmZlODA1MTUyZWYwOWY5ODk5YzVjNWEyMWZmZWU4ZTZlZTVmYQ" />
            <SaleLink href="#">MUA NGAY</SaleLink>
          </Sale>
          <Sale>
            <SaleImage src="https://au2-images.shop.samsung.com/medias/B-n-sao-c-a-650x650-opt1.jpg?context=bWFzdGVyfGltYWdlc3wzMDQ0NTB8aW1hZ2UvanBlZ3xoYzIvaDE0LzEyMTM2MTAyNjI1MzEwL0LhuqNuIHNhbyBj4bunYSA2NTB4NjUwLW9wdDEuanBnfGM4YWQwZmZiZjY0NzQwOTc4MjFlYjYyODUzYzBlZDMzNzc1MDUzYjdhZWM2NjZjOGJhYTkwZTcyYTc2MTFiODE" />
            <SaleLink href="#">MUA NGAY</SaleLink>
          </Sale>
          <Sale>
            <SaleImage src="https://au2-images.shop.samsung.com/medias/Feature-650x650.jpg?context=bWFzdGVyfGltYWdlc3wxMzIyNjR8aW1hZ2UvanBlZ3xoZjQvaDRhLzEyMjEyNDE1NjI3Mjk0L0ZlYXR1cmVfNjUweDY1MC5qcGd8NzRiZDA5ODEyY2MxZTM2OTlmMmFhODhkMjEyNTBjMmJiMjE4MDkzZjJjOWM4NTIzYzA5M2EwYWJhY2JjMTM3NA" />
            <SaleLink href="#">MUA NGAY</SaleLink>
          </Sale>
          <Sale>
            <SaleImage src="https://au2-images.shop.samsung.com/medias/0307-d2c-Feature4-sieudeal-650x650.jpg?context=bWFzdGVyfGltYWdlc3wxODU5MzJ8aW1hZ2UvanBlZ3xoMjAvaGFmLzEyMjE0OTE1NjI5MDg2LzAzMDdfZDJjX0ZlYXR1cmU0X3NpZXVkZWFsXzY1MHg2NTAuanBnfDk4MzAxZWExOWE0ZTI5MjEwYjE3YWMxMzljZGQ4OTgxOWU5OTg1MTYzYjdhNjQ1ZjRlNjJmNjRiZDMxMjM2OTM" />
            <SaleLink href="#">TÌM HIỂU THÊM</SaleLink>
          </Sale>
          <Sale>
            <SaleImage src="https://au2-images.shop.samsung.com/medias/Feature-650x650.jpg?context=bWFzdGVyfGltYWdlc3wxNDQ3NzN8aW1hZ2UvanBlZ3xoNWYvaGU3LzEyMTkzNDgxNzUyNjA2L0ZlYXR1cmVfNjUweDY1MC5qcGd8OTVhMDFjNTdkZDg0MzcyMTdmMTVkYWYwYWE5MjI4MjMwMDVjMTYwYjVkOWU1Mjc2YjFiNmRkZDg5NmQ5OWRlNA" />
            <SaleLink href="#">TÌM HIỂU THÊM</SaleLink>
          </Sale>
        </WrapperSale>
      </Wrapper>
      <ContainerMore>
        <MoreImage src="https://au2-images.shop.samsung.com/medias/d2c-ext-300821-chinhsach.png?context=bWFzdGVyfGltYWdlc3w0MDY4NHxpbWFnZS9wbmd8aDFhL2hmMS8xMTUyNjA3NTY0NTk4Mi9kMmNfZXh0XzMwMDgyMV9jaGluaHNhY2gucG5nfDMzMzAyYWY3NmQzYmIzMWE1YWFkYWU2MDQxZTBlOTM5OGQxNTgxMDVhNGI2Y2QyM2Y2YzM4MjM5ZDIzYTJiNTA" />
        <MoreLink href="#">TÌM HIỂU THÊM</MoreLink>
      </ContainerMore>
    </Container>
  );
};

export default FindProduct;
