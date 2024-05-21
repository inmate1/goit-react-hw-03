import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ userData, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {userData.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default ContactList;
