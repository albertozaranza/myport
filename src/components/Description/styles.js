import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eee;
  padding: 160px 10px 10px 10px;
  font-size: 14px;

  span {
    font-size: 18px;
    font-weight: bold;
  }

  h1,
  span {
    margin-bottom: 10px;
  }
`;

export const Text = styled.div`
  max-width: 700px;
  margin-bottom: 20px;
`;

const changeToWhite = keyframes`
  from{
    background-color: orange;
    color: #fff;
    border: none;
  }
  to {
    color: orange;
    background-color: #fff;
    border: 1px solid orange;
  }
`;

const changeToOrange = keyframes`
  from{
    color: orange;
    background-color: #fff;
    border: 1px solid orange;
  }
  to {
    background-color: orange;
    color: #fff;
    border: none;
  }
`;

export const Button = styled.button`
  height: 50px;
  width: 150px;
  border-radius: 10px;
  animation: ${changeToOrange} 500ms forwards;

  :hover {
    animation: ${changeToWhite} 500ms forwards;
  }
`;
