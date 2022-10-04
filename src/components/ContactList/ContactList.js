export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {name}: <span>{number}</span>{' '}
          </p>
        </li>
      ))}
    </ul>
  );
};
