import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #19181f;
  padding: 160px 15px 15px 15px;
  border-bottom: 10px solid #ffa500;
  color: #fff;
  font-size: 16px;

  span {
    font-size: 18px;
    font-weight: bold;
  }

  h1,
  span {
    margin-bottom: 10px;
  }

  p {
    max-width: 650px;
    margin-bottom: 20px;
    text-align: justify;
  }
`;

export const Text = styled.div``;

const changeToWhite = keyframes`
  from{
    background-color: #ffa500;
    color: #19181f;
    border: none;
  }
  to {
    color: #ffa500;
    background-color: #19181f;
    border: 1px solid #ffa500;
  }
`;

const changeToOrange = keyframes`
  from{
    color: #ffa500;
    background-color: #19181f;
    border: 1px solid #ffa500;
  }
  to {
    background-color: #ffa500;
    color: #19181f;
    border: none;
  }
`;

export const Button = styled.button`
  height: 50px;
  width: 150px;
  border-radius: 10px;
  animation: ${changeToOrange} 350ms forwards;

  :hover {
    animation: ${changeToWhite} 350ms forwards;
  }
`;
