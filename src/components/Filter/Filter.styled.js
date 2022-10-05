import styled from 'styled-components';
export const Container = styled.div`
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
`;
