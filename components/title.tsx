import React from "react";

interface ITitle {
  label: string;
}

const Title = ({ label }: ITitle) => {
  return (
    <h2 className="title w-max px-2 mb-3 font-semibold text-3xl md:text-4xl">
      {label}
    </h2>
  );
};

export default Title;
