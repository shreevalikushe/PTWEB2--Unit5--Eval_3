import React from "react";
import styled from "styled-components";
const Form = styled.form`
  background-color: aquamarine;
  margin: 1rem;
  padding: 1rem;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  gap: 3rem;
`;
const Div = styled.div`
  margin: 1rem;
`;
export const ProductsInput = ({ handleChange, handleSubmit }) => {
  const handle = (e) => {
    handleChange(e);
  };
  return (
    <>
      <Form>
        <Div>
          <label>Title:</label>
          <input type="text" name="title" onChange={(e) => handle(e)} />
        </Div>
        <Div>
          <label>Cost:</label>
          <input type="number" name="cost" onChange={(e) => handle(e)} />
        </Div>
        <Div>
          <label>Image URL:</label>
          <input type="url" name="image" onChange={(e) => handle(e)} />
        </Div>
        <Div>
          <label>Category:</label>
          <select name="category" onChange={(e) => handle(e)}>
            <option>Select Category</option>
            <option>Vegetable</option>
            <option>Fruits</option>
            <option>Provisions</option>
          </select>
        </Div>
        <Div>
          <button onClick={handleSubmit}>Submit</button>
        </Div>
      </Form>
    </>
  );
};
