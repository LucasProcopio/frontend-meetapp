import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 30px;
  background: rgba(0, 0, 0, 0.3);
`;
export const Content = styled.div`
  height: 92px;
  max-width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  img {
    width: 32px;
    height: 32px;
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 30px;

    strong {
      font-size: 14px;
      color: #fff;
      font-weight: bold;
      text-align: center;
      margin: 0 0 5px;
    }

    a {
      font-size: 12px;
      color: #999999;
      text-align: center;
    }
  }

  > button {
    width: 71px;
    height: 42px;
    border: 0;
    border-radius: 4px;
    background: #d44059;
    color: #fff;
    font-weight: bold;
  }
`;
