import Product from '../components/product/Product';

const Home = () => {
  return (
    <main className="flex flex-col gap-y-6 lg:gap-y-10 px-4 pb-6">
      <picture>
        <source srcSet="/assets/home/hero-web.png" media="(min-width: 640px)" />
        <img
          src="/assets/home/hero-mobile.png"
          alt=""
          className="w-full rounded"
        />
      </picture>
      <Product />
    </main>
  );
};

export default Home;
