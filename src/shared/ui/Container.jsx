import React from 'react';

const Container = ({children}) => {
  return (
    <div className="flex basis-auto bg-main-dark w-full">
      <section className="w-full h-screen bg-main_blue overflow-auto">
        <div className="py-4 h-screen bg-main_blue mx-auto max-w-screen-xl lg:pt-6 lg:px-6">
          {children}
        </div>
      </section>
    </div>
  );
};

export default Container;
