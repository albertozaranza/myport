import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 15px;
`;

export const TimeLine = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  border-bottom: 10px solid #19181f;
`;

export const BigPoint = styled.div`
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  border: 5px solid #19181f;
  font-size: 16px;
  position: relative;
  top: 42px;
  background-color: #fff;
`;

export const Point = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    font-size: 16px;
  }

  span {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
    border: 5px solid #19181f;
    position: relative;
    top: 35px;
    background-color: #fff;
  }
`;
