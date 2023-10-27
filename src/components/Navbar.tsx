import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <nav className="text-auburnBlue-900 flex w-full flex-col justify-between gap-2 p-4 sm:flex-row sm:gap-0 sm:px-8 sm:py-4">
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
          className="bg-auburnBlue-900 block w-full cursor-pointer rounded-3xl px-4 py-1 text-center text-white sm:hidden"
        >
          Contact
        </Link>
        <button className="px-1">
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
