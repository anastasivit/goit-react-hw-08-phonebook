import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from '../../redux/contactsSlice';
import { selectFilter } from '../../redux/contactsSelectors';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleChange = event => {
    dispatch(updateFilter(event.target.value));
  };

  return (
    <label>
      Find contacts by name
      <input type="text" value={filter} onChange={handleChange} />
    </label>
  );
};

export default Filter;
