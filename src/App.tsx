import { useEffect, useState } from 'react';

import { ProductCard } from './components/common';
import { makeApiRequest } from './utils/api';
import { Product } from './types/product';

const App = () => {
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
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </>
  );
};

export default App;
