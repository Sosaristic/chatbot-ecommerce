import { BannerImage } from '@/components/common';
import { Button } from '@/components/ui/button';
import { formatAmount } from '@/lib/helpers';
import { useCartStore } from '@/stores/useCartStore';
import { Minus, Plus, Trash2 } from 'lucide-react';
import Cart from '../../assets/svg/cart.svg';
import { useNavigate } from 'react-router-dom';
import { Product } from '@/types/product';

type Props = {
  product: Product;
};
const CartCard = ({ product }: Props) => {
  const { increaseQty, decreaseQty, getQty, deleteItem } = useCartStore(
    (state) => state
  );
  return (
    <div className="flex items-center p-4 rounded-md bg-white-def ">
      <img
        src={product.image}
        alt=""
        className="max-h-[4rem] max-w-[4rem] min-w-[4rem] rounded-lg"
      />
      <div className="flex flex-col gap-2 ml-4 ">
        <h2 className="">{product.title}</h2>
        <p>
          <span className="font-bold">Price:</span>{' '}
          {formatAmount(product.price * 100)}
        </p>

        <p className="">
          <span className="font-bold"> Sub total</span>{' '}
          {formatAmount(product.price * 100 * product.quantity!)}
        </p>
        <div className="flex items-center gap-4">
          <Button
            disabled={getQty(product) === 1}
            size={'sm'}
            onClick={() => decreaseQty(product)}
          >
            <Minus />
          </Button>
          <p className="text-xl">{getQty(product)}</p>
          <Button size={'sm'} onClick={() => increaseQty(product)}>
            <Plus />
          </Button>
        </div>
      </div>
      <button
        className="ml-auto"
        title="remove item"
        onClick={() => deleteItem(product)}
      >
        <Trash2 />
      </button>
    </div>
  );
};

const CartPage = () => {
  const { items, totalAmount, totalItems } = useCartStore((state) => state);

  const navigate = useNavigate();

  return (
    <div>
      <BannerImage title="Cart" />
      <div className="container flex flex-col gap-6 my-6 mt-10 lg:flex-row">
        <div className="px-4 py-2  overflow-hidden rounded-[1rem] lg:w-2/3 bg-white-def">
          <h2 className="text-2xl">
            Cart <span>({items.length})</span>
          </h2>
          <hr className="my-4" />

          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center flex-1">
              <img src={Cart} alt="" className="h-[18rem] w-[18rem]" />
              <h1>Cart is empty</h1>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {items.map((item) => (
                <CartCard key={item.id} product={item} />
              ))}
            </div>
          )}
        </div>
        <div className="px-4 py-2 lg:w-1/3 bg-white-def flex flex-col gap-4 rounded-[1rem] h-fit">
          <h2 className="text-2xl">Cart Summary</h2>
          <hr className="my-4" />
          <p>
            <span className="mr-2 font-bold">Total Items:</span> {totalItems()}
          </p>
          <p>
            <span className="mr-2 font-bold">Total:</span>
            {formatAmount(totalAmount() * 100)}
          </p>
          <Button
            className="w-full"
            disabled={items.length === 0}
            size={'lg'}
            onClick={() => navigate('/cart/checkout')}
          >
            Checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
