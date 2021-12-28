import React from "react";
import styled from "styled-components";
import { categories } from "../data";
import Category from "./Category";
import { mobile } from "../responsive";

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${mobile({ padding: "0px", flexDirection: 'column' })}
`

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Category key={item.id} category={item} />
      ))}
    </Container>
  );
};

export default Categories;
