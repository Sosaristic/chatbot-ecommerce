import { ProductCard } from '@/components/common';
import { Product } from '@/types/product';

type sectionedProps = {
  title: string;
  products: Product[];
};
const Sectioned = ({ title, products }: sectionedProps) => {
  return (
    <section className="container py-8 my-8 bg-white-def">
      <h2 className="my-8 text-2xl font-bold">{title}</h2>
      <div className="relative grid gap-10 grid-col-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            className="flex-1  flex flex-col items-center min-w-[20rem]"
            key={product.id}
          >
            <ProductCard key={product.id} product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Sectioned;
