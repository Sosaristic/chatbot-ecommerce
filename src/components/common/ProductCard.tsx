import { formatAmount } from '@/lib/helpers';
import { GetRating } from '.';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';

type CardProps = {
  img: string;
  title: string;
  price: number;
  rating: number;
  count: number;
  id: number;
};

const ProductCard = ({ img, title, price, rating, count, id }: CardProps) => {
  const navigate = useNavigate();
  return (
    <div
      role="button"
      onClick={() => navigate(`/products/${id}`)}
      className="min-h-[28rem] w-full flex flex-col relative shadow-sm hover:shadow-md"
    >
      <div className="flex justify-center">
        <img
          src={img}
          height={100}
          width={200}
          alt=""
          className=" max-h-[200px] h-[50]"
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
