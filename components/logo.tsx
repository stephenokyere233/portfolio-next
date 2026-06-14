import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-3">
        <Image
          src="/logo.png"
          alt="Steve logo"
          className="w-[50px]"
          width={80}
          height={80}
        />
        <h2 className="font-bold text-2xl uppercase tracking-wider">Steve</h2>
      </div>
    </Link>
  );
};

export default Logo;
