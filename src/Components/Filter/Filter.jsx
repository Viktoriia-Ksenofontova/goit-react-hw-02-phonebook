import { v4 as uuidv4 } from 'uuid';
const searchInputId = uuidv4();
const Filter = ({ value, onChange }) => (
  <>
    <label htmlFor={searchInputId}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
        id={searchInputId}
      />
    </label>
  </>
);

export default Filter;
