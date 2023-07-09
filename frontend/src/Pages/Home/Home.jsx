import { Footer, Header, MailList } from "Components";
import React from "react";
import Featured from "./Featured";
import PropertyList from "./PropertyList";
import FeaturedProperties from "./FeaturedProperties";

export const Home = () => {
  return (
    <div>
      <Header />
      <div className="mt-24 flex flex-col items-center gap-8">
        <Featured />
        <PropertyList />
        <FeaturedProperties />
        <MailList />
        <Footer/>
      </div>
    </div>
  );
};
