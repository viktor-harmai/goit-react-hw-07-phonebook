import { Contact } from 'components/ContactList/Contact/Contact';
import { ContactsList } from 'components/ContactList/ContactList.styled';

export const ContactList = ({ contacts }) => {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} contactName={name} contactNumber={number} />
      ))}
    </ContactsList>
  );
};
