import styled from 'styled-components';

export const Form = styled.form`
  display: inline-flex;
  flex-direction: column;
  gap: 10px;

  width: 200px;

  label {
    display: block;
    font-size: 20px;
  }
  input {
    display: block;
    width: 200px;

    padding: 5px;
  }
  button {
    padding: 10px 10px;
    border: none;
    border-radius: 4px;
    width: 150px;

    background-color: #f5f4fa;
    color: #212121;

    font-family: inherit;
    font-weight: 500;
    font-size: 18px;

    text-align: center;

    cursor: pointer;

    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1),
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
      background-color: #2196f3;
      color: #ffffff;
      box-shadow: 0px 3px 1px rgba(0, 0, 0, 0.1),
        0px 1px 2px rgba(0, 0, 0, 0.08), 0px 2px 2px rgba(0, 0, 0, 0.12);
    }
  }
`;
