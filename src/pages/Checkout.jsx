import { Link } from 'react-router-dom';
import Button from '../components/Button';

const Checkout = () => {
  return (
    <div className="px-4 pb-6">
      <h2 className="font-inter font-bold text-2xl">Checkout</h2>
      <section className="grid grid-rows-[auto_auto_auto] lg:grid-rows-[auto_1fr] lg:grid-cols-[auto_auto] gap-8">
        <div className="w-full lg:max-w-[400px] lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">
          <h2 className="font-inter font-bold text-xl">Order Summary</h2>
          <div className="flex flex-col mt-4 border">
            <div className="p-6">
              <p className="flex justify-between font-inter font-semibold text-xl border-b pb-4">
                Subtotal <span>$2950</span>
              </p>
              <div className="flex flex-col border-b pb-4 font-inter text-lg">
                <div className="flex flex-row justify-between pt-4">
                  <p className="font-semibold text-xl">Shipping</p>
                  <div className="flex flex-col">
                    <label>
                      <input type="radio" name="" id="" className="mr-2" />
                      Flat rate: <span className="font-semibold">$30.00</span>
                    </label>
                    <label>
                      <input type="radio" name="" id="" className="mr-2" />
                      Free shipping
                    </label>
                  </div>
                </div>
              </div>
              <p className="flex justify-between font-inter font-semibold text-xl py-4">
                Total <span>$2950</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-3">
          <h2 className="font-inter font-bold text-xl">Delivery Information</h2>
          <form className="bg-blue-light p-4 flex flex-col gap-6 lg:p-8">
            <label htmlFor="" className="flex flex-col gap-2">
              <span className="font-inter font-bold text-base">
                Delivery Address
              </span>
              <input
                type="text"
                name=""
                id=""
                className="border rounded p-2 bg-[transparent]"
              />
            </label>
            <div>
              <p className="font-inter font-bold text-base pb-2">
                Payment Method
              </p>
              <div className="flex flex-row gap-4 items-center">
                <label
                  htmlFor=""
                  className="font-inter font-semibold text-base flex flex-row gap-2 items-center">
                  <input
                    type="radio"
                    name=""
                    id=""
                    defaultChecked
                    className=""
                  />
                  Standard
                </label>
                <label
                  htmlFor=""
                  className="font-inter font-semibold text-base flex flex-row gap-2 items-center">
                  <input
                    type="radio"
                    name=""
                    id=""
                    defaultChecked
                    className=""
                  />
                  Express
                </label>
              </div>
            </div>
            <div>
              <p className="font-inter font-bold text-base pb-2">
                Payment Method
              </p>
              <div className="flex flex-row gap-4 items-center">
                <label
                  htmlFor=""
                  className="font-inter font-semibold text-base flex flex-col items-center has-[:checked]:border rounded-lg w-fit px-1 py-2">
                  <img src="/assets/credit card.png" alt="" className="w-20" />
                  credit card
                  <input
                    type="radio"
                    name=""
                    id=""
                    defaultChecked
                    className="hidden"
                  />
                </label>
                <label
                  htmlFor=""
                  className="font-inter font-semibold text-base flex flex-col items-center has-[:checked]:border rounded-lg w-fit px-1 py-2">
                  <img src="/assets/gift card.png" alt="" className="w-20" />
                  Gift Card
                  <input type="radio" name="" id="" className="hidden" />
                </label>
                <label
                  htmlFor=""
                  className="font-inter font-semibold text-base flex flex-col items-center has-[:checked]:border rounded-lg w-fit px-1 py-2">
                  <img src="/assets/paypal.png" alt="" className="w-20" />
                  Paypal
                  <input type="radio" name="" id="" className="hidden" />
                </label>
              </div>
            </div>
            <label htmlFor="" className="flex flex-col gap-2">
              <span className="font-inter font-bold text-base">
                Credit Card Info
              </span>
              <input
                type="text"
                name=""
                id=""
                placeholder="0000-0000-0000-0000"
                className="border rounded p-2 bg-[transparent]"
              />
            </label>
            <label htmlFor="" className="flex flex-col gap-2">
              <span className="font-inter font-bold text-base">
                Name on Card
              </span>
              <input
                type="text"
                name=""
                id=""
                className="border rounded p-2 bg-[transparent]"
              />
            </label>
            <div className="flex flex-row flex-wrap gap-4">
              <label
                htmlFor=""
                className="flex flex-col gap-2 w-full max-w-[150px]">
                <span className="font-inter font-bold text-base">
                  CCV Number
                </span>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border rounded p-2 bg-[transparent]"
                />
              </label>
              <label
                htmlFor=""
                className="flex flex-col gap-2 w-full max-w-[150px]">
                <span className="font-inter font-bold text-base">
                  Expiry Month
                </span>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border rounded p-2 bg-[transparent]"
                />
              </label>
              <label
                htmlFor=""
                className="flex flex-col gap-2 w-full max-w-[150px]">
                <span className="font-inter font-bold text-base">
                  Expiry Year
                </span>
                <input
                  type="text"
                  name=""
                  id=""
                  className="border rounded p-2 bg-[transparent]"
                />
              </label>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-4 items-center lg:col-start-2 lg:col-end-3 lg:row-start-2 lg:row-end-3">
          <Button>Complete Purchase</Button>
          <Link to="/cart" className="underline">
            Back to Cart
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Checkout;
