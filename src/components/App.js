import { useState } from 'react';

import { useLocalStorage } from 'hooks';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { Container, Title, SubTitle } from 'components/App.styled';

import { nanoid } from 'nanoid';

export const App = () => {
  // const [contacts, setContacts] = useLocalStorage('contacts', [
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);

  const [contacts, setContacts] = useLocalStorage('contacts', []);
  const [filter, setFilter] = useState('');

  // useEffect(() => {
  //   window.localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (
      contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      return alert(`${newContact.name} is already in contacts.`);
    }

    setContacts(prevState => {
      return [newContact, ...prevState];
    });
  };

  const changeFilter = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContacts = id => {
    setContacts(prevState => prevState.filter(contact => contact.id !== id));
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm onContact={addContact} />
      <SubTitle>Contacts</SubTitle>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContact={deleteContacts}
      />
    </Container>
  );
};
