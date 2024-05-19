import { useState } from 'react';
import userData from "./components/userData.json"

import './App.css';
import ContactList from './components/ContactList/ContactList';

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className='wrapper'>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      <ContactList userData={userData} />
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