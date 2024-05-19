import css from './Contact.module.css';
import { FaPhone } from 'react-icons/fa6';
import { IoPersonSharp } from 'react-icons/io5';
import { IconContext } from 'react-icons';
const Contact = ({ name, number }) => {
  return (
    <li className={css.listItem}>
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
      <button className={css.btnContact} type='button' aria-label='delete'>
        Delete
      </button>
    </li>
  );
};

export default Contact;
