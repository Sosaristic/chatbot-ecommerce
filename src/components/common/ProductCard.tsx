import { formatAmount } from '@/lib/helpers';
import { GetRating } from '.';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useCartStore } from '@/stores/useCartStore';

type CardProps = {
  product: Product;
};

const ProductCard = ({ product }: CardProps) => {
  const navigate = useNavigate();
  const { isInCart, addToCart } = useCartStore((state) => state);
  return (
    <div
      role="button"
      onClick={() => navigate(`/products/${product.id}`)}
      className="min-h-[28rem] w-full flex flex-col relative shadow-sm hover:shadow-md"
    >
      <div className="flex justify-center">
        <img
          src={product.image}
          height={100}
          width={200}
          alt=""
          className=" max-h-[200px] h-[50]"
        />
      </div>
      <div className="p-4 mt-auto bg-grey-800">
        <h2 className="truncate">{product.title}</h2>
        <div className="flex items-center">
          <GetRating rate={product.rating.rate} />
          <p className="ml-6">({product.rating.count})</p>
        </div>
        <p className="text-xl font-bold">{formatAmount(product.price * 100)}</p>
        <div className="mt-4">
          <Button
            className="w-full"
            disabled={isInCart(product)}
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
          >
            {isInCart(product) ? 'Added to Cart' : 'Add to Cart'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
