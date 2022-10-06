import PropTypes from 'prop-types';
import { Container } from 'components/Filter/Filter.styled';
import { nanoid } from 'nanoid';

export const Filter = ({ value, onChange }) => {
  const nameInputId = nanoid();
  return (
    <Container>
      <label htmlFor={nameInputId}>Find contacts by name</label>
      <input
        id={nameInputId}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
