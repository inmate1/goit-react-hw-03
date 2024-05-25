import PropTypes from 'prop-types';
import css from './SearchBox.module.css';
import { useId } from 'react';

const SearchBox = ({ value, onFind }) => {
  const inputId = useId();

  return (
    <div className={css.wrapper}>
      <label htmlFor={inputId}>Find contacts by name</label>
      <input
        className={css.searchInput}
        type='search'
        name='input'
        id={inputId}
        value={value}
        onChange={evt => onFind(evt.target.value)}
      />
    </div>
  );
};

SearchBox.propTypes = {
  value: PropTypes.string.isRequired,
  onFind: PropTypes.func.isRequired,
};

export default SearchBox;
