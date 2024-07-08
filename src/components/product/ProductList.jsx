import productData from '../../data';
import Button from '../Button';
import ProductItem from './ProductItem';

const ProductList = () => {
  return (
    <div className="flex flex-col items-center gap-y-6">
      <ul className="flex flex-row flex-wrap gap-4 sm:gap-14">
        {productData.map((data) => {
          return (
            <li key={data.id} className="basis-[360px] grow-0 shrink">
              <ProductItem itemData={data} />
            </li>
          );
        })}
      </ul>
      <Button>View More Products</Button>
    </div>
  );
};

export default ProductList;

// sm:grid sm:grid-cols-2 sm:grid-rows-2
