import PropTypes from "prop-types"
import css from './ContactList.module.css';
import Contact from '../Contact/Contact';

const ContactList = ({ userData, onDelete }) => {
  return (
    <ul className={css.contactList}>
      {userData.map(({ id, name, number }) => (
        <Contact
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};


ContactList.propTypes = {
  userData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default ContactList;
