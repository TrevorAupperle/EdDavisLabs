import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="flex w-full max-w-7xl flex-col justify-between gap-2 p-4 text-auburnBlue-900 sm:flex-row sm:gap-0 sm:py-4">
      <Link
        href="/"
        className="flex items-center justify-center gap-2 px-2 sm:justify-normal"
      >
        <Image
          src="/svgs/PolymersTest.svg"
          width={32}
          height={32}
          alt="Ed Davis Labs Logo"
        />
        <h1 className="text-lg font-semibold">Ed Davis Labs</h1>
      </Link>
      <NavLinks />
      <div className="flex items-center gap-4">
        <Link
          href="/contact"
          className="block w-full cursor-pointer rounded-3xl bg-auburnBlue-900 px-4 py-1 text-center text-white sm:hidden"
        >
          Contact
        </Link>
        <button className="hidden px-1 sm:block">
          <Image
            src="/svgs/Magnifier.svg"
            width={32}
            height={32}
            alt="Search Icon"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
