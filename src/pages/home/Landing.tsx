import { Product } from '@/types/product';
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
    <>
      <Sectioned
        title="New Arrivals"
        products={products?.length ? products.slice(0, 10) : []}
      />

      <Sectioned
        title="Top Picks"
        products={products?.length ? products.slice(0, 10) : []}
      />
    </>
  );
};

export default Home;
