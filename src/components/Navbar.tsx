import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="text-auburnBlue-900 flex w-full justify-between px-6 py-4">
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/svgs/PolymersTest.svg"
          width={32}
          height={32}
          alt="Ed Davis Labs Logo"
        />
        <h1 className="text-lg font-semibold">Ed Davis Labs</h1>
      </Link>
      <NavLinks />
      <button>
        <Image
          src="/svgs/Magnifier.svg"
          width={32}
          height={32}
          alt="Search Icon"
        />
      </button>
    </nav>
  );
};

export default Navbar;
