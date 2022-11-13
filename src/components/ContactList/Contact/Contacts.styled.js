import styled from 'styled-components';

export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 5px 0;
`;

export const Text = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  font-family: inherit;
  font-size: 15px;

  flex-grow: 1;

  span {
    font-size: 12px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;

  border-radius: 50%;
  background-color: ${props => props.color};
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    color: #bdbdbd;
  }

  &:hover {
    svg {
      color: #2196f3;
    }
  }
`;
