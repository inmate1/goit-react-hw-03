import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ userData }) => {
  return (
    <ul className={css.contactList}>
      {userData.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
