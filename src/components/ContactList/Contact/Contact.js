import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contactsSlice';
import { ContactListItem } from 'components/ContactList/Contact/Contacts.styled';

export const Contact = ({ contact: { id, name, number } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ContactListItem>
      <p>
        {name}: <span>{number}</span>
      </p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </ContactListItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
