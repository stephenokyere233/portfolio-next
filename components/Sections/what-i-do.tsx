import React from "react";
import Title from "../title";
import { SERVICES } from "../../constants";

const WhatIDo = () => {
  const styles = {
    background: "rgba(169, 169, 169, 0.2)",
  };
  return (
    <section className="mb-20">
      <Title label="What I Do" />
      <div className="grid grid-cols-1 lg:grid-cols-2 py-5 gap-10">
        {SERVICES.map((service, index) => {
          const { title, description } = service;
          return (
            <div
              style={{ background: styles.background }}
              key={index}
              className="flex gap-4  flex-col md:flex-row items-center md:items-start  rounded-md p-5 py-6"
            >
              <div className="gradient-bg h-[55px] rounded-md p-3 max-w-[100px] flex items-center justify-center">
                <service.icon size={32} />
              </div>
              <div className="text-center md:text-start">
                <h2 className="text-xl font-semibold">{title}</h2>
                <p className="md:text-lg">{description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatIDo;
