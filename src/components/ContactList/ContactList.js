import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors';

import { Contact } from 'components/ContactList/Contact/Contact';
import { ContactsList } from 'components/ContactList/ContactList.styled';

export const ContactList = () => {
  const visibleСontacts = useSelector(selectVisibleContacts);

  return (
    <ContactsList>
      {visibleСontacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ContactsList>
  );
};
