import React from 'react';
import Logo from '@/assets/logo.svg';
import { Button } from '../ui/button';

const navLinks = [
  { name: 'Electronics', path: '/products/electronics' },
  { name: 'Jewelery', path: '/products/jewelery' },
  { name: "Men's Clothing", path: '/products/men_clothing' },
  { name: "Women's Clothing", path: '/products/women_clothing' },
];

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <header className="flex items-center px-8 py-10">
        <div className="flex items-center flex-[2]">
          <img src={Logo} alt="" height={40} width={40} />
          <h2>OmniMart</h2>
        </div>
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
      {children}
    </div>
  );
};

export default AppLayout;
