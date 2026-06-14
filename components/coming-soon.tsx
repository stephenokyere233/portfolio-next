import React from "react";

const ComingSoon = () => {
  return (
    <div className="box-surface px-8 py-16 md:px-20 md:py-24 text-center">
      <h1
        className="font-bold gradient-text"
        style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
      >
        Coming Soon
      </h1>
      <p className="text-white/60 text-[15px] mt-4">
        Still putting this together. Check back soon.
      </p>
    </div>
  );
};

export default ComingSoon;
