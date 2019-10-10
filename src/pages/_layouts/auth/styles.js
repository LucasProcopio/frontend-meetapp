import styled from 'styled-components';
import { darken, lighten } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background-image: linear-gradient(180deg, #22202c 0%, #402845 100%);
  display: flex;
  justify-content: center;
  padding-top: 50px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;

  img {
    transition: all 0.2s ease-in-out;
    &:hover {
      transform: scale(1.08);
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      width: 315px;
      height: 50px;
      font-size: 18px;
      border-radius: 4px;
      background-color: rgba(0, 0, 0, 0.1);
      border: 0;
      margin-bottom: 10px;
      padding: 0 15px;
      color: rgba(255, 255, 255, 0.8);
    }

    > button {
      font-size: 18px;
      width: 315px;
      height: 50px;
      border-radius: 4px;
      background: #f94d6a;
      border: 0;
      color: #fff;
      font-weight: bold;
      transition: background 0.2s ease-in-out;

      &:hover {
        background: ${darken(0.12, '#f94d6a')};
      }
    }

    a {
      text-align: center;
      margin-top: 15px;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
      font-weight: bold;
      transition: color 0.2s ease-in-out;

      &:hover {
        color: ${lighten(0.4, '#777')};
      }
    }

    > span {
      color: rgba(255, 0, 0, 0.5);
      margin-bottom: 10px;
      font-weight: bold;
    }
  }
`;
