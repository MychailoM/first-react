import React from "react";
import styled from "styled-components";


const Card = styled.div`
  width: 640px;
  padding: 20px;
  border-radius: 8px;
  background-color: rgb(176, 182, 184);
  
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
  "Lucida Sans", Arial, sans-serif;
  display: flex;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 360px;
  border-radius: 4px;
  
`;

const Content = styled.div`
  padding: 15px;
`;

const Title = styled.h2`
  font-size: 24px;
  color: white;
  text-align: center;
  font-weight: 700;
  margin: 20px;
`;

const Description = styled.p`
  font-size: 18px;
  color: white;
  text-align: center;
  font-weight: 400;
  margin: 20px;
`;

const Price = styled.h3`
  font-size: 24px;
  color: white;
  text-align: center;
  font-weight: 400;
  margin: 20px;
`;

const BuyBtn = styled.button`
  padding: 15px 30px;
  color: white;
  border-radius: 8px;
  background-color: rgb(87, 106, 113);
  display: block;
  margin: 0 auto;
  cursor: pointer;
  border: none;
  margin-top: 64px;

  &:hover {
    background-color: rgb(53, 65, 70);
  }
`;


function ProductCard({product}) {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.title} />
      <Content>
        <Title>{product.title}</Title>
        <Description>{product.description}</Description>
        <Price>{product.price}</Price>
        <BuyBtn>buy now</BuyBtn>
      </Content>
    </Card>
  );
}

export default ProductCard;