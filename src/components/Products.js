import React from "react";
import Title from "./Title";
import Card from "./Card";
import { styled } from "styled-components";
const products = [
  {
    id: 1,
    name: "bed",
    price: 244.99,
    description: "A comfortable and stylish bed for a good night's sleep.",
    img: "https://www.course-api.com/images/store/product-1.jpeg",
  },
  {
    id: 2,
    name: "couch",
    price: 499.99,
    description: "A cozy couch for relaxing and lounging.",
    img: "https://www.course-api.com/images/store/product-2.jpeg",
  },
  {
    id: 3,
    name: "table",
    price: 129.99,
    description: "A modern and functional table for various uses.",
    img: "https://www.course-api.com/images/store/product-3.jpeg",
  },
  {
    id: 4,
    name: "furniture",
    price: 239.99,
    description: "Stylish furniture that complements any room decor.",
    img: "https://www.course-api.com/images/store/product-4.jpeg",
  },
  {
    id: 5,
    name: "table",
    price: 199.99,
    description: "A versatile table perfect for work and dining.",
    img: "https://www.course-api.com/images/store/product-5.jpeg",
  },
  {
    id: 6,
    name: "bed",
    price: 179.99,
    description: "A durable and elegant bed for a restful sleep experience.",
    img: "https://www.course-api.com/images/store/product-6.jpeg",
  },
  {
    id: 7,
    name: "furniture",
    price: 109.99,
    description: "Affordable and stylish furniture for your home.",
    img: "https://www.course-api.com/images/store/product-7.jpeg",
  },
  {
    id: 8,
    name: "chairs",
    price: 49.99,
    description: "Comfortable chairs for seating in any room.",
    img: "https://www.course-api.com/images/store/product-8.jpeg",
  },
];

const StyledProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  margin: 2rem 0;

  @media screen and (max-width: 1110px) {
      grid-template-columns: repeat(3,  minmax(0, 1fr));
  }

  @media screen and (max-width: 820px) {
      grid-template-columns: repeat(2,  minmax(0, 1fr));
  }

  @media screen and (max-width: 520px) {
      grid-template-columns: repeat(1,  minmax(0, 1fr));
  }
`;

const Products = () => {
  return (
    <section>
      <Title title="all products" />
      <StyledProducts>
        {products.map((product) => {
          return <Card {...product} key={product.id} />;
        })}
      </StyledProducts>
    </section>
  );
};

export default Products;
