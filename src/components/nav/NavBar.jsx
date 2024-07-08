import { useNavigate } from 'react-router-dom';
import Logo from '../Logo';

const NavBar = () => {
  const navigate = useNavigate();

  return (
    <header className="flex flex-col items-center gap-y-2 px-4 py-3">
      <div className="grid grid-cols-2 sm:grid-cols-[1fr_auto] w-full gap-x-2 font-inter font-medium text-lg text-[#000000]/50">
        <label className="flex flex-row items-center gap-x-2 w-full overflow-hidden border border-blue-light rounded-md p-2">
          <img src="/assets/search.png" alt="" className="size-6" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="w-full"
          />
          <span className="sr-only">Search for an item</span>
        </label>
        <div className="flex flex-row items-center justify-between gap-x-2 w-full max-w-[250px] overflow-hidden border border-blue-light rounded-md p-2">
          <p>Dashboard</p>
          <img src="/assets/chevron-down.png" alt="" className="size-6" />
        </div>
      </div>
      <div className="flex flex-row items-center lg:grid lg:grid-cols-[auto_1fr_auto] gap-x-6 w-full">
        <Logo />
        <button
          onClick={() => navigate('cart')}
          className="ml-auto sm:order-3 sm:m-0 lg:flex lg:flex-row-reverse lg:items-center lg:gap-4 lg:p-3 text-white text-center font-inter font-bold text-lg lg:bg-blue rounded">
          <img src="/assets/cart.png" className="lg:hidden" alt="" />
          <img src="/assets/cart-dark.png" className="hidden lg:block" alt="" />
          <span className="hidden lg:inline ml-2 uppercase">Shopping Cart</span>
        </button>
        <nav className="sm:ml-auto lg:w-full max-w-[640px]">
          <button className="sm:hidden">
            <img src="/assets/nav-open.png" alt="" />
          </button>
          <ul className="hidden sm:flex sm:flex-row sm:gap-14 justify-end w-full font-inter font-medium text-lg uppercase">
            <li>
              <a href="#">Products</a>
            </li>
            <li>
              <a href="#">Category</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
