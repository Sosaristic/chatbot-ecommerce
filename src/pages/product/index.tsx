import { Empty, GetRating, Loader } from '@/components/common';
import { Button } from '@/components/ui/button';
import { formatAmount } from '@/lib/helpers';
import { useCartStore } from '@/stores/useCartStore';
import { Product } from '@/types/product';

import { makeApiRequest } from '@/utils/api';
import { Minus, Plus } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { productID } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const { addToCart, isInCart, increaseQty, decreaseQty, getQty } =
    useCartStore((state) => state);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const { data } = await makeApiRequest<Product>(
        `/products/${productID}`,
        'GET'
      );

      if (data) {
        setProduct(data);
      }

      setIsLoading(false);
    })();
  }, []);

  return (
    <div className="container flex flex-col flex-1 h-full">
      {isLoading ? (
        <Loader />
      ) : !product ? (
        <Empty />
      ) : (
        <div className="flex flex-col mt-8 lg:flex-row bg-white-def">
          <div className="relative flex-1 w-full md:min-w-[30rem] p-10 ">
            <img
              src={product?.image}
              className="max-h-[20rem] md:max-h-[50rem] w-full w-full bg-transparent"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-8 mt-12 ">
            <h2 className="text-xl font-bold">{product?.title}</h2>
            <p className="text-xl font-bold text-grey-900">
              {formatAmount(product?.price * 100)}
            </p>

            <div className="flex items-center">
              <GetRating rate={product?.rating?.rate || 0} />
              <p className="ml-6">{product?.rating.count} customers reviews</p>
            </div>
            <p className="text-lg">{product?.description}</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center border gap-2 h-full py-1 rounded-[.5rem] border-grey-900">
                <Button
                  variant={'ghost'}
                  disabled={getQty(product) === 1}
                  onClick={() => decreaseQty(product)}
                >
                  <Minus size={24} />
                </Button>
                <span className="text-xl">{getQty(product)}</span>
                <Button variant={'ghost'} onClick={() => increaseQty(product)}>
                  <Plus size={24} />
                </Button>
              </div>
              <Button
                variant={'outline'}
                className="w-[20rem] py-6 "
                disabled={isInCart(product)}
                onClick={() => addToCart(product)}
              >
                {isInCart(product) ? 'Added To Cart' : 'Add to Cart'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
