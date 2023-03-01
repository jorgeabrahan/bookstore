import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { checkStatus, filterByCountry } from '../redux/categories/categoriesSlice';
import Button from './Button';
import './Categories.css';

export default function Categories() {
  const [country, setCountry] = useState('australia');
  const dispatch = useDispatch();
  const { categories } = useSelector((store) => store.categories);

  return (
    <div className="center categories">
      {typeof categories === 'string' && <p className="categories__message">{categories}</p>}
      <button
        className="blue-button mt-1rem"
        type="button"
        onClick={() => {
          dispatch(checkStatus());
        }}
      >
        CHECK STATUS
      </button>
      <br />
      <label htmlFor="country" className="categories__filter">
        <span>
          Select country:
        </span>
        <select
          id="country"
          name="country"
          value={country}
          onChange={({ target }) => setCountry(target.value)}
        >
          <option value="japan">Japan</option>
          <option value="australia">Australia</option>
          <option value="unitedStates">United States</option>
        </select>
      </label>
      <Button run={() => dispatch(filterByCountry(country))} text="Filter by country" className="blue-button" />
    </div>
  );
}
