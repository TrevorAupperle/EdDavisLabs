import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Highlight from "~/components/Highlight";
import TimelineSection, {
  type TimelineSectionProps,
} from "~/components/TimelineSection";

const Funding: TimelineSectionProps[] = [
  {
    date: "May 2021",
    title: "Promoting DoN STEM Careers via STEM Educational Activities",
    funding: "$651,511",
    description:
      "DoN Office of Naval Research, PI: E.W. Davis, co-PIS: J.M. Lakin and C. Seals",
  },
  {
    date: "Jan 2022",
    title: "EFRI E3P",
    funding: "$1,980,029",
    description:
      '"Supercritical Extraction for the Elimination of End-of-Life Plastics (SCE3P),” National Science Foundation, PI: E.W. Davis, co-PIs: R. Miao, Y. Peng, V. Davis, V.K. Ranagari',
  },
  {
    date: "May 2022",
    title: "REM Supplement to EFRI E3P",
    funding: "$96,303",
    description:
      "Supercritical Extraction for the Elimination of End-of-Life Plastics (SCE3P),”National Science Foundation, PI: E.W. Davis",
  },
  {
    date: "Feb 2023",
    title: "Hybridworks Chemical recycling of PET",
    funding: "$34,000",
    description:
      "Hybridworks Chemical LLC, co-PIs: E.W. Davis and B. Beckingham",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Ed Davis Labs</title>
        <meta name="description" content="Website for Dr. Ed Davis" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-auburnBlue-900 px-8 py-6 text-4xl">
        <h1>
          Materials research to improve{" "}
          <span className="text-auburnOrange-900">health</span>
          <br />
          and the <span className="text-auburnOrange-900">environment</span>.
        </h1>
      </div>
      <div className="text-auburnBlue-900 flex items-center gap-6 px-8 py-6">
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
          headerName="Outreach"
          headerSvg="/svgs/Users.svg"
          description="Committed to community engagement and fostering STEM inspiration: Bridging academia and public through meaningful outreach initiatives and educational endeavors at Auburn University."
          linkText="Activities"
          linkHref="/outreach"
        />
      </div>
      <div className="relative h-[300px] w-full">
        <Image
          src="/Hero.png"
          objectFit="cover"
          layout="fill"
          alt="Research Image"
        />
      </div>
      <div className="flex flex-col gap-6 px-8 py-6">
        <div className="flex items-end justify-between">
          <div className="text-auburnBlue-900 flex flex-col gap-2">
            <h4 className="text-xl font-bold">Current Funding</h4>
            <p className="text-sm">
              Highlighting active grants and financial support fueling our
              groundbreaking biomaterials research at Auburn University.
            </p>
          </div>
          <Link
            href="/research"
            className="bg-auburnOrange-900 cursor-pointer rounded-lg px-4 py-2 text-white"
          >
            View more
          </Link>
        </div>
        <div className="flex items-start gap-4">
          {Funding.map((funding, index) => (
            <TimelineSection
              key={index}
              date={funding.date}
              title={funding.title}
              funding={funding.funding}
              description={funding.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
