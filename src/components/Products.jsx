import React, { useEffect, useState } from "react";
import { ProductItem } from "./ProductItem";
import { ProductsInput } from "./ProductsInput";
import styled from "styled-components";
const Wrapper = styled.div`
  background-color: black;
  color: whitesmoke;
  margin: 1rem auto;
  width: 400px;
  padding: 1rem;
  border: 3px solid red;
  border-radius: 5px;
`;
export const Products = () => {
  const [form, setForm] = useState({
    title: "",
    cost: "",
    image: "",
    category: "",
  });
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [page]);
  const handleChange = (e) => {
    let { value, name, type, files } = e.target;
    value = type === "file" ? files[0].name : value;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => getData())
      .catch((err) => console.log(err));
  };
  const getData = () => {
    fetch(`http://localhost:3001/products?_page=${page}&_limit=5`)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => console.log(e));
    console.log(data);
  };
  const filterByCategory = (e) => {
    console.log(e.target.value);

    fetch(`http://localhost:3001/products?category=${e.target.value}`)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <h1>Welcome to the products page</h1>
      <ProductsInput handleChange={handleChange} handleSubmit={handleSubmit} />
      <select onChange={filterByCategory}>
        <option>Select Category</option>
        <option>Fruits</option>
        <option>Vegetable</option>
      </select>
      {data.map((item) => (
        <Wrapper key={item.id}>
          <ProductItem {...item} />
        </Wrapper>
      ))}
      <div>
        <button disabled={page - 1 <= 0} onClick={() => setPage(page - 1)}>
          {" "}
          {page - 1}{" "}
        </button>
        <button> {page}</button>
        <button onClick={() => setPage(page + 1)}> {page + 1} </button>
      </div>
    </div>
  );
};
