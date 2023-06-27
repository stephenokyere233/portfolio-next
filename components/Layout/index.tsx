import React, { FC } from "react";
import Header from "../Header";
import Footer from "../Footer";

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative scroll-smooth select-none">
      <Header />
      <section className="max-w-7xl px-4 mx-auto">
        {children}
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
