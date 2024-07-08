import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row gap-12 bg-blue text-white px-6 py-12 mt-auto">
      <div className="w-auto">
        <Logo type="dark" />
        <p className="font-inter font-normal text-base mt-6 max-w-[75ch]">
          At Timbu Cloud Shop, we cater to all your gadget needs in one
          convenient location. We offer a wide range of affordable and
          accessible products, no matter where you are or what you're looking
          for. Timbu Cloud Shop is your ultimate one-stop shop for gadgets.
        </p>
      </div>
      <nav className="flex flex-col md:flex-row gap-8 md:justify-between font-inter font-normal text-base w-full">
        <div>
          <h4 className="font-bold text-xl">Support</h4>
          <ul className="flex flex-col gap-y-1 mt-4 font-light">
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Shipping Information</a>
            </li>
            <li>
              <a href="#">Order Tracking</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl">Support</h4>
          <ul className="flex flex-col gap-y-1 mt-4 font-light">
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Shipping Information</a>
            </li>
            <li>
              <a href="#">Order Tracking</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold text-xl">Support</h4>
          <ul className="flex flex-col gap-y-2 mt-4 font-light">
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Return Policy</a>
            </li>
            <li>
              <a href="#">Shipping Information</a>
            </li>
            <li>
              <a href="#">Order Tracking</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
          </ul>
          <ul className="flex flex-row gap-x-6 mt-8">
            <li>
              <a href="#">
                <img
                  src="/public/assets/facebook-icon.png"
                  alt=""
                  className="size-6"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="/public/assets/facebook-icon.png"
                  alt=""
                  className="size-6"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <img
                  src="/public/assets/facebook-icon.png"
                  alt=""
                  className="size-6"
                />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
