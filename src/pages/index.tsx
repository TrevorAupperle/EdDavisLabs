import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { currentFunding } from "public/data/funding";
import Highlight from "~/components/Highlight";
import TimelineSection from "~/components/TimelineSection";

const funding = currentFunding.slice(0, 4);

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Ed Davis Labs</title>
        <meta name="description" content="Website for Dr. Ed Davis" />
        <link rel="icon" href="/svgs/PolymersTest.svg" />
      </Head>
      <div className="max-w-7xl px-4 py-6 text-2xl text-auburnBlue-900 sm:px-8 sm:text-4xl">
        <h1 className="font-semibold">
          Materials research to improve{" "}
          <span className="text-auburnOrange-900">health</span>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>and the{" "}
          <span className="text-auburnOrange-900">environment</span>.
        </h1>
      </div>
      <div className="flex max-w-7xl flex-col items-center gap-6 px-4 py-6 text-auburnBlue-900 sm:flex-row sm:px-8">
        <Highlight
          headerName="Research"
          headerSvg="/svgs/ConicalFlask.svg"
          description="Exploring Engineering's Grand Challenges, Controlled Release,
            Shape Memory Polymers, Biomechanics Testing, and Biomedical Polymer
            & Nano-composite Applications."
          linkText="Current projects"
          linkHref="/research"
        />
        <Highlight
          headerName="Teaching"
          headerSvg="/svgs/Teaching.svg"
          description="Serving Auburn University since 2007: From Assistant Research Professor to Associate Professor in Mechanical and Materials Engineering, with a rich history in Polymer and Fiber Education."
          linkText="Courses"
          linkHref="/teaching"
        />
        <Highlight
          headerName="People"
          headerSvg="/svgs/Users.svg"
          description="Dedicated to nurturing academic excellence and professional growth: Connecting theory and practice through mentorship and guidance of undergraduate and graduate students at Auburn University."
          linkText="People"
          linkHref="/people"
        />
      </div>
      <div className="relative h-[400px] w-full sm:h-[300px]">
        <Image
          src="/Hero.png"
          objectFit="cover"
          layout="fill"
          alt="Research Image"
        />
      </div>
      <div className="flex max-w-7xl flex-col gap-6 py-6 sm:px-8">
        <div className="flex flex-col items-end justify-between gap-4 px-4 sm:flex-row sm:gap-0 sm:px-0">
          <div className="flex flex-col gap-2 text-auburnBlue-900">
            <h4 className="text-xl font-bold">Current Funding</h4>
            <p className="text-sm">
              Highlighting active grants and financial support fueling our
              groundbreaking biomaterials research at Auburn University.
            </p>
          </div>
          <Link
            href="/research"
            className="w-full cursor-pointer whitespace-nowrap rounded-lg bg-auburnOrange-900 px-4 py-2 text-center text-white sm:w-fit"
          >
            View more
          </Link>
        </div>
        <div className="flex flex-col items-start gap-8 sm:flex-row sm:gap-4">
          {funding.map((funding, index) => (
            <TimelineSection key={index} {...funding} />
          ))}
        </div>
      </div>
    </>
  );
}
