import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 900px;
  margin: 0 auto;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 35px 0;

    strong {
      color: #fff;
      font-size: 32px;
    }

    a {
      width: 172px;
      height: 42px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 4px;
      background-color: #f94d6a;
      color: #fff;
      font-weight: bold;
      transition: background 0.2s ease-in-out;

      &:hover {
        background: ${darken(0.2, '#f94d6a')};
      }

      > svg {
        margin-right: 10px;
      }
    }
  }

  ul {
    width: 100%;
    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: rgba(0, 0, 0, 0.1);
      padding: 20px;
      border-radius: 4px;
      margin: 10px 0;
      border: 1px solid transparent;
      transition: all 0.2s ease-in-out;
      cursor: pointer;

      &:hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
        transform: scaleX(1.01);
      }

      strong {
        color: #fff;
        font-size: 16px;
      }

      span {
        color: #999;
        font-size: 14px;
        display: flex;
        justify-content: center;
        align-items: center;

        > svg {
          color: #fff;
          margin-left: 10px;
        }
      }
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
    margin: 30px auto;
    color: #fff;
    animation: ${rotate} 2s linear infinite;
  }
`;
