import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";

const FAB = () => {
  return (
    <Link
      href="/contact"
      className="fixed flex items-center justify-center bottom-4 right-4 m-4 md:m-10 p-3 text-xl rounded-full gradient-bg z-[20]"
      aria-label="Contact"
    >
      <FaEnvelope size={20} />
    </Link>
  );
};

export default FAB;
