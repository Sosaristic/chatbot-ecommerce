import { makeApiRequest } from '@/utils/api';
import { useEffect, useState } from 'react';
import Sectioned from './Sectioned';

const Home = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data } = await makeApiRequest<Product[]>('/products', 'GET');

      setProducts(data as Product[]);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="flex flex-col gap-10 item-center">
      <Sectioned
        title="New Arrivals"
        products={products?.length ? products.slice(0, 8) : []}
      />

      <Sectioned
        title="Top Picks"
        products={products?.length ? products.slice(8, 16) : []}
      />
    </div>
  );
};

export default Home;
