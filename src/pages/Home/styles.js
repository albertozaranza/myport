import styled from 'styled-components';

import background from '../../assets/background.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.div`
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

  h1 {
    font-size: 40px;
  }

  span {
    font-size: 24px;
  }
`;

export const Border = styled.div`
  height: 10px;
  width: 475px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
`;
