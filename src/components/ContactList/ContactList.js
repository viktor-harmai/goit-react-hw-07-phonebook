import { useSelector } from 'react-redux';
import { getContacts, getValueFilter } from '../../redux/selectors';
import { Contact } from 'components/ContactList/Contact/Contact';
import { ContactsList } from 'components/ContactList/ContactList.styled';

//фильтруем контакты по значению фильтра

const getVisibleContacts = (contacts, valueFilter) => {
  const normalizedFilter = valueFilter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  // Получаем массив контактов из состояния Redux
  const contacts = useSelector(getContacts);
  // Получаем значение фильтра из состояния Redux
  const valueFilter = useSelector(getValueFilter);
  // console.log(valueFilter);

  // массив контактов которые необходимо отображать в интерфейсе
  const visibleСontacts = getVisibleContacts(contacts, valueFilter);

  return (
    <ContactsList>
      {visibleСontacts.map(contact => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ContactsList>
  );
};
