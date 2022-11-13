import PropTypes from 'prop-types';
import { MdDeleteForever } from 'react-icons/md';

import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { ContactListItem } from 'components/ContactList/Contact/Contacts.styled';

// MdDeleteForever;

export const Contact = ({ contact: { id, name, phone } }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <ContactListItem>
      <p>
        {name}: <span>{phone}</span>
      </p>
      <button type="button" onClick={handleDelete}>
        <MdDeleteForever size={20} />
      </button>
    </ContactListItem>
  );
};

Contact.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
  }),
};
