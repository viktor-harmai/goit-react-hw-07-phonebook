import PropTypes from 'prop-types';
import { Container } from 'components/Filter/Filter.styled';
import { nanoid } from 'nanoid';

export const Filter = ({ value, onChange }) => {
  return (
    <Container>
      <div>
        <label htmlFor={nanoid()}>Find contacts by name</label>
        <input
          id={nanoid()}
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        />
      </div>
    </Container>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
