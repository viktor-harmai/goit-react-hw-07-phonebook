export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name }) => (
        <li key={id}>
          <p>{name}</p>
        </li>
      ))}
    </ul>
  );
};
