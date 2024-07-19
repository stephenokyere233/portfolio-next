import React from "react";
import ComingSoon from "../../components/coming-soon";
import WidthConstraint from "@/width-constraint";

const BlogHome = () => {
  return (
    <div className="flex justify-center items-center h-[65vh]">
      <WidthConstraint>
        <ComingSoon />
      </WidthConstraint>
    </div>
  );
};

export default BlogHome;
