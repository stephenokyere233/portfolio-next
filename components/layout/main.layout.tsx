import React from "react";
import Header from "../header";
import Footer from "../footer";
import FAB from "../fab";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative scroll-smooth select-none">
      <FAB icon={<></>} title="Hire Me" />
      <Header />
      <section className="max-w-7xl px-6 lg:px-4 mx-auto">{children}</section>
      <Footer />
    </div>
  );
};

export default Layout;
