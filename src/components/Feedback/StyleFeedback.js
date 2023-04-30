import styled from 'styled-components';

export const Styled = {
  Wrapper: styled.div`
    display: flex;
    gap: 16px;
  `,
  Button: styled.button`
    text-transform: capitalize;
    cursor: pointer;
    font-weight: 700;
    padding: 2px 10px;
    border-radius: 4px;
    :hover {
      background-color: #8f00ff;
      box-shadow: 0 5px 7px -1px rgba(51, 51, 51, 0.23);
    }
  `,
};
