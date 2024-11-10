import React from 'react';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header>
        <h2>OmniMart</h2>
      </header>
      {children}
    </div>
  );
};

export default AppLayout;
