import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contactsSlice';
import { nanoid } from 'nanoid';
import { Form } from 'components/ContactForm/ContactForm.styled';

export function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { name, number } = form;
    // console.log(name.value);
    // console.log(number.value);
    if (
      contacts.some(
        contact => contact.name.toLowerCase() === name.value.toLowerCase()
      )
    ) {
      return alert(`${name.value} is already in contacts.`);
    }

    dispatch(addContact(name.value, number.value));

    form.reset();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label htmlFor={nanoid()}>Name</label>
        <input
          id={nanoid()}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>

      <div>
        <label htmlFor={nanoid()}>Number</label>
        <input
          id={nanoid()}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>

      <button type="submit">Add contact</button>
    </Form>
  );
}
