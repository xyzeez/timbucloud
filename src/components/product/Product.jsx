import ProductAside from './ProductAside';
import ProductHeader from './ProductHeader';
import ProductList from './ProductList';
import ProductNav from './ProductNav';

const Product = () => {
  return (
    <section className="grid gap-6 sm:grid-rows-[auto_auto] sm:grid-cols-[420px_1fr]">
      <ProductNav />
      <div className="flex flex-col gap-y-6 sm:col-start-2 sm:col-end-3 sm:row-start-1 sm:row-end-3">
        <ProductHeader />
        <ProductList />
      </div>
      <ProductAside />
    </section>
  );
};

export default Product;
