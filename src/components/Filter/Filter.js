import { Container } from 'components/Filter/Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Container>
      <label>
        Find contacts by name
        <input type="text" name="filter" value={value} onChange={onChange} />
      </label>
    </Container>
  );
};
