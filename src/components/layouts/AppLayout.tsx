import React from 'react';
import Logo from '@/assets/logo.svg';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const navLinks = [
  { name: 'Electronics', path: '/products/electronics' },
  { name: 'Jewelery', path: '/products/jewelery' },
  { name: "Men's Clothing", path: '/products/men_clothing' },
  { name: "Women's Clothing", path: '/products/women_clothing' },
];

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="fixed z-50 flex items-center w-screen px-8 py-10 bg-white-def">
        <Link to={'/'} className="flex items-center flex-[2]">
          <img src={Logo} alt="" height={40} width={40} />
          <h2 className="text-xl font-bold">OmniMart</h2>
        </Link>
        <nav className="flex items-center flex-[3]">
          <ul className="flex items-center flex-1 gap-4 justify-evenly">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.path}>{link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Button>Get Started</Button>
        </div>
      </header>
      <div className="mt-[7rem]">{children}</div>
    </div>
  );
};

export default AppLayout;
