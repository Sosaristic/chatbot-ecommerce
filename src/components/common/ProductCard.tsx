import { formatAmount } from '@/lib/helpers';
import { GetRating } from '.';
import { Button } from '../ui/button';

type CardProps = {
  img: string;
  title: string;
  price: number;
  rating: number;
  count: number;
};

const ProductCard = ({ img, title, price, rating, count }: CardProps) => {
  return (
    <div className="min-h-[20rem] flex flex-col relative shadow-sm hover:shadow-md">
      <div className="flex justify-center h-2/3">
        <img
          src={img}
          height={200}
          width={200}
          alt=""
          className="object-cover"
        />
      </div>
      <div className="p-4 mt-auto bg-grey-800">
        <h2 className="truncate">{title}</h2>
        <div className="flex items-center">
          <GetRating rate={rating} />
          <p className="ml-6">({count})</p>
        </div>
        <p className="text-xl font-bold">{formatAmount(price * 100)}</p>
        <div className="mt-4">
          <Button className="w-full">Add to Cart</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
