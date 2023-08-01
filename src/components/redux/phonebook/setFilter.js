// export const { setFilter } = contactsSlise.actions


export const setFilter = (state) => {
    const { contacts, filter } = state.contacts;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };