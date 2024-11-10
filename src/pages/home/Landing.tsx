import { ProductCard } from '@/components/common';
import { Product } from '@/types/product';
import { makeApiRequest } from '@/utils/api';
import { useEffect, useState } from 'react';

const Home = () => {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await makeApiRequest<Product[]>('/products', 'GET');

      setProducts(data as Product[]);
      setLoading(false);
    })();
  }, []);

  return (
    <>
      {loading && <div>Loading...</div>}
      <div className="container grid gap-10 grid-col-2 md:grid-cols-3 lg:grid-cols-4">
        {products?.map((product) => (
          <ProductCard
            key={product.id}
            rating={product.rating.rate}
            title={product.title}
            img={product.image}
            price={product.price}
            count={product.rating.count}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
