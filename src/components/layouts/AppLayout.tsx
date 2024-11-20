import React from 'react';
import Logo from '@/assets/logo.svg';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { Menu, ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/stores/useCartStore';

const navLinks = [
  { name: 'Electronics', path: '/products/electronics' },
  { name: 'Jewelery', path: '/products/jewelery' },
  { name: "Men's Clothing", path: '/products/men_clothing' },
  { name: "Women's Clothing", path: '/products/women_clothing' },
];

const CartBadge = () => {
  const { items } = useCartStore();
  if (items.length === 0) return null;
  return (
    <div className="absolute flex items-center justify-center rounded-full size-6 -top-4 -right-4 bg-primary-def">
      <p className="text-sm text-white-def">{items.length}</p>
    </div>
  );
};

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background-def">
      <header className="fixed z-50 flex items-center w-screen px-8 py-10 bg-white-def">
        <Link to={'/'} className="flex items-center flex-[2]">
          <img src={Logo} alt="" height={40} width={40} />
          <h2 className="text-xl font-bold">OmniMart</h2>
        </Link>
        <nav className="flex items-center hidden md:block flex-[3]">
          <ul className="flex items-center flex-1 gap-4 justify-evenly">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <Link to={'/cart'} className="relative mx-12">
          <CartBadge />
          <ShoppingCart size={26} />
        </Link>
        <div className="relative hidden md:block">
          <Button>Get Started</Button>
        </div>
        <button className="ml-auto md:hidden">
          <Menu />
        </button>
      </header>
      <div className="mt-[7rem] flex flex-col  flex-1">{children}</div>
    </div>
  );
};

export default AppLayout;
