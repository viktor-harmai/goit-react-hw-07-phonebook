// actions.js - файл объявления экшенов приложения
import { nanoid } from 'nanoid';

// const action = {
//   type: 'Action type',
//   payload: 'Payload value',
// };

export const addContact = (name, number) => {
  return {
    type: 'contacts/addContact',
    payload: {
      id: nanoid(),
      name,
      number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const setFilter = value => {
  return {
    type: 'filter/setFilter',
    payload: value,
  };
};
