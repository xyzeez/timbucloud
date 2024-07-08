const ProductNav = () => {
  return (
    <nav className="flex flex-col gap-y-3 sm:max-w-[360px]">
      <p className="uppercase bg-blue text-white text-center font-inter font-bold text-lg p-3 rounded w-full">
        Shop by Category
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row sm:flex-col items-center gap-2 *:w-full">
          <label
            htmlFor="smartphones"
            className="flex flex-row items-center justify-between gap-x-2 font-inter font-bold text-base capitalize text-blue has-[:checked]:text-white py-2 px-3 w-full bg-blue-light has-[:checked]:bg-blue">
            <input
              type="radio"
              id="smartphones"
              name="category"
              className="hidden"
            />
            Smartphones
            <img src="/assets/arrow-right.png" alt="" className="" />
          </label>
          <label
            htmlFor="accessories"
            className="flex flex-row items-center justify-between gap-x-2 font-inter font-bold text-base capitalize text-blue has-[:checked]:text-white py-2 px-3 w-full bg-blue-light has-[:checked]:bg-blue">
            <input
              type="radio"
              id="accessories"
              name="category"
              className="hidden"
            />
            Accessories
            <img src="/assets/arrow-right.png" alt="" className="" />
          </label>
        </div>
        <div className="flex flex-row sm:flex-col items-center gap-2 *:w-full">
          <label
            htmlFor="laptops"
            className="flex flex-row items-center justify-between gap-x-2 font-inter font-bold text-base capitalize text-blue has-[:checked]:text-white py-2 px-3 w-full bg-blue-light has-[:checked]:bg-blue">
            <input
              type="radio"
              id="laptops"
              name="category"
              className="hidden"
            />
            Laptops
            <img src="/assets/arrow-right.png" alt="" className="" />
          </label>
          <label
            htmlFor="wearable tech"
            className="flex flex-row items-center justify-between gap-x-2 font-inter font-bold text-base capitalize text-blue has-[:checked]:text-white py-2 px-3 w-full bg-blue-light has-[:checked]:bg-blue">
            <input
              type="radio"
              id="wearable tech"
              name="category"
              className="hidden"
            />
            Wearable Tech
            <img src="/assets/arrow-right.png" alt="" className="" />
          </label>
        </div>
        <div className="flex flex-row sm:flex-col items-center gap-2 *:w-full">
          <label
            htmlFor="Photo/Videography"
            className="flex flex-row items-center justify-between gap-x-2 font-inter font-bold text-base capitalize text-blue has-[:checked]:text-white py-2 px-3 w-full bg-blue-light has-[:checked]:bg-blue">
            <input
              type="radio"
              id="Photo/Videography"
              name="category"
              className="hidden"
            />
            Photo/Videography
            <img src="/assets/arrow-right.png" alt="" className="" />
          </label>
          <label
            htmlFor="Gaming"
            className="flex flex-row items-center justify-between gap-x-2 font-inter font-bold text-base capitalize text-blue has-[:checked]:text-white py-2 px-3 w-full bg-blue-light has-[:checked]:bg-blue">
            <input
              type="radio"
              id="Gaming"
              name="category"
              className="hidden"
            />
            Gaming
            <img src="/assets/arrow-right.png" alt="" className="" />
          </label>
        </div>
      </div>
      {/* <ul className="flex flex-row flex-wrap gap-2 sm:flex-nowrap sm:flex-col">
        {categories.map((category) => (
          <li key={category} className="flex grow shrink">
            <label
              htmlFor={category}
              className="flex flex-row items-center justify-between gap-x-2 font-inter font-bold text-base capitalize text-blue has-[:checked]:text-white py-2 px-3 w-full bg-blue-light has-[:checked]:bg-blue">
              <input
                type="radio"
                id={category}
                name="category"
              />
              {category}
              <img src="/assets/arrow-right.png" alt="" className="" />
            </label>
          </li>
        ))}
      </ul> */}
    </nav>
  );
};

export default ProductNav;
