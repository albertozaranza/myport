import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  padding: 15px;
  background-color: #f7f7f7;
`;

export const TimelineContainer = styled.div`
  width: 500px;
  height: 100px;
  margin: 0 auto;

  @media (max-width: 500px) {
    width: 300px;
  }
`;

export const Description = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;

  span {
    font-size: 30px;
    margin-bottom: 10px;

    @media (max-width: 500px) {
      font-size: 25px;
    }
  }

  p {
    font-size: 20px;

    @media (max-width: 500px) {
      font-size: 14px;
    }
  }
`;
