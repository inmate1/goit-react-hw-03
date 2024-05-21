import { useState } from 'react';

import initialContacts from './components/userData.json';
import './App.css';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [findValue, setFindValue] = useState('');
  console.log(contacts);
  const searchContact = contacts.filter(contact =>
    contact.name.toLowerCase(contact.name).includes(findValue.toLowerCase())
  );

  return (
    <div className='wrapper'>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox value={findValue} onFind={setFindValue} />
      <ContactList userData={searchContact} />
    </div>
  );
}

export default App;

// const dd = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const h = JSON.stringify(dd)
// console.log(h);
