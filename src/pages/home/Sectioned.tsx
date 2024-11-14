import { ProductCard } from '@/components/common';
import { Product } from '@/types/product';

type sectionedProps = {
  title: string;
  products: Product[];
};
const Sectioned = ({ title, products }: sectionedProps) => {
  return (
    <section className="container mt-[10rem] overflow-auto">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="relative flex">
        {products.map((product) => (
          <div className="flex-1 w-1/4 min-w-[20rem]" key={product.id}>
            <ProductCard
              key={product.id}
              rating={product.rating.rate}
              title={product.title}
              img={product.image}
              price={product.price}
              count={product.rating.count}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sectioned;
