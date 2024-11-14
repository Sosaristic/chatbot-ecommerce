import { GetRating, Loader } from '@/components/common';
import { formatAmount } from '@/lib/helpers';
import { Product } from '@/types/product';
import { makeApiRequest } from '@/utils/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProduct = () => {
  const { productID } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);

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
    <div className="container flex-1 ">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex flex-row bg-primary-600">
          <div className=" p-10 flex-1 min-w-[2]">
            <img
              src={product?.image}
              className="max-h-[25rem] w-full bg-transparent"
              alt=""
            />
          </div>
          <div className="mt-12 flex flex-col gap-4">
            <h2 className="text-xl font-bold">{product?.title}</h2>
            <p className="text-xl text-grey-900 font-bold">
              {formatAmount(product?.price || 0 * 100)}
            </p>

            <div className="flex items-center">
              <GetRating rate={product?.rating?.rate || 0} />
              <p className="ml-6">{product?.rating.count} customers reviews</p>
            </div>
            <p>{product?.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
