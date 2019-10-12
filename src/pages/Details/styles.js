import styled from 'styled-components';
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

  .header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin: 35px 0;

    strong {
      color: #fff;
      font-size: 32px;
    }

    > div {
      display: flex;

      .edit,
      .cancel {
        width: 172px;
        height: 42px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 0;
        border-radius: 4px;
        color: #fff;
        font-weight: bold;
        transition: background 0.2s ease-in-out;

        > svg {
          margin-right: 10px;
        }
      }
    }

    .edit {
      width: 116px;
      background: #4dbaf9;
      margin-right: 10px;
      &:hover {
        background: ${darken(0.2, '#4dbaf9')};
      }
    }

    .cancel {
      background: #f94d6a;
      &:hover {
        background: ${darken(0.2, '#f94d6a')};
      }
    }
  }
`;

export const DetailWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .description {
    width: 100%;
    color: #fff;
    font-size: 18px;
    margin: 25px 0;
  }

  .location {
    width: 100%;
    display: flex;
    justify-content: flex-start;

    > span {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.4);
      margin: 0 25px 25px 0;

      > svg {
        margin-right: 8px;
      }
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  border-radius: 4px;
  height: 300px;
  background: url(${props => props.url}) rgba(255, 255, 255, 0.1);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
