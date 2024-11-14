import { ProductCard } from '@/components/common';
import { Product } from '@/types/product';

type sectionedProps = {
  title: string;
  products: Product[];
};
const Sectioned = ({ title, products }: sectionedProps) => {
  return (
    <section className="container  my-8 ">
      <h2 className="text-2xl my-8 font-bold">{title}</h2>
      <div className="relative flex gap-8 overflow-auto">
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
