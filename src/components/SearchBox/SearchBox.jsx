import css from './SearchBox.module.css';
import { useState, useId } from 'react';

const SearchBox = ({ value, onFind }) => {
  const inputId = useId();
  //  const handleFind = evt => {
  //    setFindValue(evt.target.value);
  //  };

  return (
    <div className={css.wrapper}>
      <label htmlFor={inputId}>Find contacts by name</label>
      <input
        className={css.searchInput}
        type='search'
        name='input'
        id={inputId}
        value={value}
        onChange={ (evt) => onFind(evt.target.value)}
      />
    </div>
  );
};

export default SearchBox;
