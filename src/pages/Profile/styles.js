import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;

  form {
    max-width: 900px;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 35px auto;

    input {
      width: 100%;
      height: 50px;
      font-size: 18px;
      margin-bottom: 8px;
      padding: 25px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border: 0;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 15px 0;
    }

    button {
      align-self: flex-end;
      width: 180px;
      height: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 0;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      transition: background 0.2s ease-in-out;
      background: #f94d6a;
      margin: 10px 0;

      &:hover {
        background: ${darken(0.2, '#f94d6a')};
      }

      > svg {
        margin-right: 10px;
      }
    }

    > span {
      color: rgba(255, 0, 0, 0.4);
      margin-bottom: 10px;
      display: block;
      font-weight: bold;
      font-size: 18px;
    }
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin: 0px auto;
    color: #fff;
    animation: ${rotate} 2s linear infinite;
  }
`;
