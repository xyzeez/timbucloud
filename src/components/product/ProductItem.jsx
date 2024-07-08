import { getDiscountPercentage } from '../../helpers';
import Button from '../Button';
import Rating from '../rating';

const ProductItem = ({ itemData }) => {
  const {
    id,
    name,
    description,
    price,
    sale_price,
    image,
    category,
    star_rating,
  } = itemData;

  const discount = getDiscountPercentage(price, sale_price) ?? null;

  return (
    <article className="flex flex-col items-center gap-y-4 border border-blue-light rounded">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full aspect-video bg-blue-light rounded"
        />
        {discount && (
          <p className="absolute top-4 right-4 font-roboto font-medium text-base text-white bg-yellow px-2 py-1 rounded">
            {discount}% OFF
          </p>
        )}
      </div>
      <div className="flex flex-col items-center gap-y-2 py-4 text-center px-4">
        <p className="font-roboto font-medium text-[black] text-xl">{name}</p>
        <p className="inline-flex flex-row gap-x-3 font-roboto font-medium text-[black] text-xl">
          <span>${price}</span>
          {sale_price && <span className="line-through">{sale_price}</span>}
        </p>
        <Rating />
        <p className="font-roboto font-medium text-[black] text-base mb-4">
          {description}
        </p>
        <Button>Add to Cart</Button>
      </div>
    </article>
  );
};

export default ProductItem;
