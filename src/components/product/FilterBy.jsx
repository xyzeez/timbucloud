import { useState } from 'react';

const FilterBy = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="flex flex-row gap-x-2">
      <label htmlFor="filter-options" className="">
        Filter By:
      </label>
      <select
        id="filter-options"
        value={selectedOption}
        onChange={handleOptionChange}
        className="border rounded">
        <option value="">none</option>
        <option value="option1">Promo</option>
        <option value="option2">New Arrival</option>
      </select>
    </div>
  );
};

export default FilterBy;
