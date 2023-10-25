import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

const Links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Research",
    path: "/research",
  },
  {
    name: "Teaching",
    path: "/teaching",
  },
  {
    name: "Outreach",
    path: "/outreach",
  },
  {
    name: "People",
    path: "/people",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const NavLinks = () => {
  const [selected, setSelected] = useState(0);

  const [backgroundPillWidth, setBackgroundPillWidth] = useState(0);
  const [backgroundPillOffset, setBackgroundPillOffset] = useState(0);
  const linkRef = useRef<HTMLAnchorElement[]>([]);

  const router = useRouter();

  useEffect(() => {
    const path = router.pathname;
    const index = Links.findIndex((link) => link.path === path);
    setSelected(index);
  }, [router.pathname]);

  useEffect(() => {
    function setBackgroundPillPosition() {
      const link = linkRef.current;
      if (link) {
        const selectedLink = link[selected];
        console.log(selectedLink?.offsetLeft, selectedLink?.clientWidth);
        setBackgroundPillOffset(selectedLink?.offsetLeft ?? 0);
        setBackgroundPillWidth(selectedLink?.clientWidth ?? 0);
      }
    }

    setBackgroundPillPosition();
    window.addEventListener("resize", setBackgroundPillPosition);

    return () => {
      window.removeEventListener("resize", setBackgroundPillPosition);
    };
  }, [selected]);

  return (
    <div className="relative flex items-center gap-4 text-sm">
      <div className="border-auburnBlue-900 flex items-center rounded-3xl border">
        {Links.map((link, index) => {
          if (index != Links.length - 1)
            return (
              <Link
                key={index}
                ref={(el) => {
                  if (el) {
                    return (linkRef.current[index] = el);
                  }
                }}
                href={link.path}
                className={`cursor-pointer rounded-3xl px-4 py-2 transition-all duration-300 ${
                  selected === index && "text-white"
                }`}
                onClick={() => setSelected(index)}
              >
                {link.name}
              </Link>
            );
        })}
      </div>
      <Link
        href="/contact"
        ref={(el) => {
          if (el && selected === Links.length - 1) {
            return (linkRef.current[Links.length - 1] = el);
          }
        }}
        className="bg-auburnBlue-900 cursor-pointer rounded-3xl px-4 py-2 text-white"
        onClick={() => setSelected(Links.length - 1)}
      >
        Contact
      </Link>
      <span
        className="bg-auburnBlue-900 absolute bottom-0 -z-10 block h-full rounded-3xl transition-all duration-300"
        style={{
          left: backgroundPillOffset,
          width: backgroundPillWidth,
        }}
      />
    </div>
  );
};

export default NavLinks;
