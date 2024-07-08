import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import Rating from '../components/rating';

const Cart = () => {
  const navigate = useNavigate();

  return (
    <main className="px-4 pb-6">
      <section>
        <h1 className="font-inter font-bold text-2xl text-blue uppercase border-b">
          My Cart
        </h1>
        <div className="hidden">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <ul className="flex flex-col gap-4 mt-4 *:border-b *:pb-4">
          <li>
            <article className="flex flex-row gap-4 ">
              <div className="flex bg-blue-light w-[200px] rounded">
                <img
                  src="/assets/products/laptop.png"
                  alt=""
                  className="m-auto"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full font-roboto font-bold text-lg">
                <div className="w-full">
                  <h2 className="">13’ Macbook Air 2020</h2>
                  <div>
                    <p>
                      Color: <span>Silver</span>
                    </p>
                    <p>
                      Model: <span>2020</span>
                    </p>
                  </div>
                  <p>SN: HTNO-24-07</p>
                </div>
                <div className="flex items-center justify-between w-full">
                  <p>$1080</p>
                  <div className="flex items-center gap-2 text-3xl">
                    <button> - </button>
                    <span className="text-xl">0</span>
                    <button>+</button>
                  </div>
                  <p className="hidden sm:inline">$1080</p>
                </div>
              </div>
            </article>
          </li>
          <li>
            <article className="flex flex-row gap-4 ">
              <div className="flex bg-blue-light w-[200px] rounded">
                <img
                  src="/assets/products/laptop.png"
                  alt=""
                  className="m-auto"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full font-roboto font-bold text-lg">
                <div className="w-full">
                  <h2 className="">13’ Macbook Air 2020</h2>
                  <div>
                    <p>
                      Color: <span>Silver</span>
                    </p>
                    <p>
                      Model: <span>2020</span>
                    </p>
                  </div>
                  <p>SN: HTNO-24-07</p>
                </div>
                <div className="flex items-center justify-between w-full">
                  <p>$1080</p>
                  <div className="flex items-center gap-2 text-3xl">
                    <button> - </button>
                    <span className="text-xl">0</span>
                    <button>+</button>
                  </div>
                  <p className="hidden sm:inline">$1080</p>
                </div>
              </div>
            </article>
          </li>
          <li>
            <article className="flex flex-row gap-4 ">
              <div className="flex bg-blue-light w-[200px] rounded">
                <img
                  src="/assets/products/laptop.png"
                  alt=""
                  className="m-auto"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full font-roboto font-bold text-lg">
                <div className="w-full">
                  <h2 className="">13’ Macbook Air 2020</h2>
                  <div>
                    <p>
                      Color: <span>Silver</span>
                    </p>
                    <p>
                      Model: <span>2020</span>
                    </p>
                  </div>
                  <p>SN: HTNO-24-07</p>
                </div>
                <div className="flex items-center justify-between w-full">
                  <p>$1080</p>
                  <div className="flex items-center gap-2 text-3xl">
                    <button> - </button>
                    <span className="text-xl">0</span>
                    <button>+</button>
                  </div>
                  <p className="hidden sm:inline">$1080</p>
                </div>
              </div>
            </article>
          </li>
          <li>
            <article className="flex flex-row gap-4 ">
              <div className="flex bg-blue-light w-[200px] rounded">
                <img
                  src="/assets/products/laptop.png"
                  alt=""
                  className="m-auto"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full font-roboto font-bold text-lg">
                <div className="w-full">
                  <h2 className="">13’ Macbook Air 2020</h2>
                  <div>
                    <p>
                      Color: <span>Silver</span>
                    </p>
                    <p>
                      Model: <span>2020</span>
                    </p>
                  </div>
                  <p>SN: HTNO-24-07</p>
                </div>
                <div className="flex items-center justify-between w-full">
                  <p>$1080</p>
                  <div className="flex items-center gap-2 text-3xl">
                    <button> - </button>
                    <span className="text-xl">0</span>
                    <button>+</button>
                  </div>
                  <p className="hidden sm:inline">$1080</p>
                </div>
              </div>
            </article>
          </li>
        </ul>
        <div>
          <form className="flex flex-row border border-blue my-4 w-full max-w-[600px] lg:mt-10">
            <input
              type="text"
              name=""
              id=""
              placeholder="Promo code here"
              className="w-full font-inter text-lg p-3"
            />
            <button
              type="submit"
              className="uppercase w-full max-w-[150px] bg-blue text-white font-bold">
              Apply
            </button>
          </form>
        </div>
      </section>
      <section className="flex flex-col lg:flex-row-reverse lg:border-t lg:mt-10 lg:pt-10 gap-10">
        <div className="w-full max-w-[400px]">
          <h2 className="font-inter font-bold text-2xl">Cart Totals</h2>
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
                <div className="text-right">
                  <p>
                    Shipping to{' '}
                    <span className="font-semibold">14, AmoreGardens</span>
                  </p>
                  <a href="#" className="text-blue">
                    Change Address
                  </a>
                </div>
              </div>
              <p className="flex justify-between font-inter font-semibold text-xl py-4">
                Total <span>$2950</span>
              </p>
            </div>
            <div className="border-t flex justify-center py-8">
              <Button clickHandler={() => navigate('/checkout')}>
                Proceed to Checkout
              </Button>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-inter font-bold text-xl">
            You might also be interested in:
          </h2>
          <div className="flex flex-row flex-wrap gap-6 mt-4">
            <article className="flex flex-col basis-[350px] grow-0 shrink items-center gap-y-4 border border-blue-light rounded">
              <div className="relative">
                <img
                  src="/public/assets/products/laptop.png"
                  alt=""
                  className="w-full aspect-video bg-blue-light rounded"
                />
                <p className="absolute top-4 right-4 font-roboto font-medium text-base text-white bg-yellow px-2 py-1 rounded">
                  10% OFF
                </p>
              </div>
              <div className="flex flex-col items-center gap-y-2 py-4 text-center px-4">
                <p className="font-roboto font-medium text-[black] text-xl">
                  {name}
                </p>
                <p className="inline-flex flex-row gap-x-3 font-roboto font-medium text-[black] text-xl">
                  <span>$100</span>
                  <span className="line-through">$200</span>
                </p>
                <Rating />
                <Button>Add to Cart</Button>
              </div>
            </article>
            <article className="flex flex-col basis-[350px] grow-0 shrink items-center gap-y-4 border border-blue-light rounded">
              <div className="relative">
                <img
                  src="/public/assets/products/laptop.png"
                  alt=""
                  className="w-full aspect-video bg-blue-light rounded"
                />
                <p className="absolute top-4 right-4 font-roboto font-medium text-base text-white bg-yellow px-2 py-1 rounded">
                  10% OFF
                </p>
              </div>
              <div className="flex flex-col items-center gap-y-2 py-4 text-center px-4">
                <p className="font-roboto font-medium text-[black] text-xl">
                  {name}
                </p>
                <p className="inline-flex flex-row gap-x-3 font-roboto font-medium text-[black] text-xl">
                  <span>$100</span>
                  <span className="line-through">$200</span>
                </p>
                <Rating />
                <Button>Add to Cart</Button>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Cart;
