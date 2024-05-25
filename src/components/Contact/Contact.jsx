import css from './Contact.module.css';
import PropTypes from 'prop-types';
import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons';

const Contact = ({ id, name, number, onDelete }) => {
  return (
    <li className={css.listItem} id={id}>
      <div>
        <div className={css.text}>
          <IconContext.Provider value={{ color: 'black', size: '16' }}>
            <IoPersonSharp />
          </IconContext.Provider>
          <p>{name}</p>
        </div>
        <div className={css.text}>
          <IconContext.Provider value={{ color: 'black', size: '16' }}>
            <FaPhone />
          </IconContext.Provider>

          <p>{number}</p>
        </div>
      </div>
      <button
        className={css.btnContact}
        type='button'
        aria-label='delete'
        onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
