// import { createSlice, nanoid } from '@reduxjs/toolkit';

// const contactsInitialState = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const contactsSlise = createSlice({
//   name: 'contacts',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.push(action.payload);
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             id: nanoid(),
//             name,
//             number,
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       const index = state.findIndex(contact => contact.id === action.payload);
//       state.splice(index, 1);
//     },
//   },
// });

// export const { addContact, deleteContact } = contactsSlise.actions;
// export const contactsReducer = contactsSlise.reducer;
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations';

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const extraActions = [fetchContacts, addContact, deleteContact];
const getActionsWithType = type =>
  extraActions.map(extraAction => extraAction[type]);
// console.log(...getActionsWithType('fulfilled'));

const handleFetchContactsSuccess = (state, action) => {
  state.items = action.payload;
  // console.log(state.items);
};

const hahandleddContactsSuccess = (state, action) => {
  state.items.push(action.payload);
};

const handledeleteContactsSuccess = (state, action) => {
  const index = state.items.findIndex(
    contact => contact.id === action.payload.id
  );
  state.items.splice(index, 1);
  // console.log(action.payload.id);
};

const anyFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const anyPending = state => {
  state.isLoading = true;
};

const anyRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlise = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, handleFetchContactsSuccess)
      .addCase(addContact.fulfilled, hahandleddContactsSuccess)
      .addCase(deleteContact.fulfilled, handledeleteContactsSuccess)

      .addMatcher(isAnyOf(...getActionsWithType('fulfilled')), anyFulfilled)
      .addMatcher(isAnyOf(...getActionsWithType('pending')), anyPending)
      .addMatcher(isAnyOf(...getActionsWithType('rejected')), anyRejected);
  },
});

export const contactsReducer = contactsSlise.reducer;

//==================================================================================

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, action) => {
//   state.isLoading = false;
//   state.error = action.payload;
// };

// extraReducers: {
//   [fetchContacts.pending]: handlePending,
//   [fetchContacts.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items = action.payload;
//     // console.log(state.items);
//   },
//   [fetchContacts.rejected]: handleRejected,
//   [addContact.pending]: handlePending,
//   [addContact.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     state.items.push(action.payload);
//   },
//   [addContact.rejected]: handleRejected,

//   [deleteContact.pending]: handlePending,
//   [deleteContact.fulfilled](state, action) {
//     state.isLoading = false;
//     state.error = null;
//     const index = state.items.findIndex(
//       contact => contact.id === action.payload.id
//     );
//     // console.log(action.payload.id);
//     state.items.splice(index, 1);
//   },
//   [deleteContact.rejected]: handleRejected,
// },
