export const Contact = ({ contactName, contactNumber }) => {
  return (
    <li>
      <p>
        {contactName}: <span>{contactNumber}</span>
      </p>
    </li>
  );
};
