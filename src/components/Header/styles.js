import styled from 'styled-components';

import background from '~/assets/background.png';

export const Container = styled.div`
  height: 400px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #19181f;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: #fff;
  border-bottom: 10px solid #ffa500;

  h1 {
    font-size: 40px;
  }

  span {
    font-size: 16px;
  }

  img {
    width: 300px;
    height: 300px;
    border: 10px solid #fff;
    border-radius: 100%;
    position: absolute;
    top: 250px;
  }
`;

export const Border = styled.div`
  height: 10px;
  width: 300px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  margin-bottom: 5px;
`;
