import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 100%;
  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 900px;
    margin: 0 auto;

    .title,
    .location {
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

    .description {
      height: 200px;
      font-size: 18px;
      margin-bottom: 8px;
      padding-left: 10px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      border: 0;
      padding: 25px;
      resize: none;
    }

    .submit-btn {
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
