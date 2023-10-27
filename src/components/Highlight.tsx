import Image from "next/image";
import Link from "next/link";

type HighlightProps = {
  headerName: string;
  headerSvg: string;
  description: string;
  linkText: string;
  linkHref: string;
};

const Highlight = (props: HighlightProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1">
        <Image
          src={props.headerSvg}
          width={32}
          height={32}
          alt="Scientific flask"
        />
        <h3 className="text-base font-bold">{props.headerName}</h3>
      </div>
      <p>{props.description}</p>
      <Link
        href={props.linkHref}
        className="text-auburnOrange-900 flex items-center gap-1 font-semibold"
      >
        <h4>{props.linkText}</h4>
        <Image
          src="/svgs/ArrowRight.svg"
          width={24}
          height={24}
          alt="Arrow pointing right"
        />
      </Link>
    </div>
  );
};
export default Highlight;
