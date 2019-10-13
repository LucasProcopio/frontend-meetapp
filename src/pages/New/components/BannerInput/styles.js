import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 35px auto 25px;

  > label {
    width: 100%;
    max-width: 900px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    input {
      display: none;
    }
  }

  .error {
    color: rgba(255, 0, 0, 0.4);
    margin-top: 10px;
    font-weight: bold;
    display: block;
    font-size: 18px;
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background: ${props =>
    props.preview ? `url(${props.preview})` : 'rgba(0, 0, 0, 0.3)'};
  background-position: center;
  background-size: cover;
  color: rgba(255, 255, 255, 0.3);

  > span {
    font-size: 20px;
    font-weight: bold;
    margin-top: 15px;
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
  display: ${props => (props.loading ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  svg {
    margin: 30px auto;
    color: rgba(255, 255, 255, 0.3);
    animation: ${rotate} 2s linear infinite;
  }
`;
