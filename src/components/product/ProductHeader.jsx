const ProductHeader = () => {
  return (
    <div className="flex flex-row items-center justify-between">
      <p className="font-inter font-semibold text-base text-blue uppercase">
        Featured Products
      </p>
      <div className="flex flex-col md:flex-row items-start gap-x-2">
        <label htmlFor="filter-options" className="">
          Filter By:
        </label>
        <select id="filter-options" className="border rounded">
          <option value="">none</option>
          <option value="option1">Promo</option>
          <option value="option2">New Arrival</option>
        </select>
      </div>
    </div>
  );
};

export default ProductHeader;
