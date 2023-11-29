import Head from "next/head";
import {
  graduateStudents,
  professor,
  undergraduateStudents,
} from "public/data/people";
import Image from "next/image";
import StudentCard from "~/components/StudentCard";
import Link from "next/link";

export default function People() {
  return (
    <>
      <Head>
        <title>People | Ed Davis Labs</title>
        <meta name="description" content="Website for Dr. Ed Davis" />
        <link rel="icon" href="/svgs/PolymersTest.svg" />
      </Head>
      <div className="flex flex-col items-center">
        <div className="flex max-w-7xl flex-col gap-6 px-4 text-auburnBlue-900">
          <div className="flex flex-col items-center gap-2 pt-4">
            <h2 className="text-3xl font-bold">
              Faces of Bio-materials Innovation
            </h2>
            <p className="text-center">
              Meet the dedicated team behind our pioneering biomaterials
              research: from the esteemed professor to the passionate
              undergraduate and graduate assistants
            </p>
          </div>
          <div className="flex gap-4 text-auburnBlue-900">
            <div className="relative min-h-[50px] min-w-[250px] rounded-lg">
              <Image
                src="/DavisHeadshot.jpg"
                objectFit="cover"
                layout="fill"
                alt="Calendar"
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="text-xl font-bold">{professor.name}</div>
              <div className="flex gap-4">
                <div className="flex w-full flex-col gap-4">
                  {professor.degrees.map((degree, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <Image
                        src="/svgs/BlueGradCap.svg"
                        height={24}
                        width={24}
                        alt="Graduation Cap"
                      />
                      <div className="font-bold">{degree.type}</div>
                      <div>
                        {degree.school +
                          ", " +
                          degree.major +
                          " (" +
                          degree.year +
                          ")"}
                        {degree.advisor && "; Advisor: " + degree.advisor}
                        {degree.dissertation &&
                          "; Dissertation: " + degree.dissertation}
                        {degree.thesis && "; Thesis: " + degree.thesis}
                      </div>
                    </div>
                  ))}
                  <Link
                    href="https://www.aub.ie/ewdavislabs-cv"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-auburnOrange-800 px-4 py-2 text-center text-white hover:bg-auburnOrange-900"
                  >
                    Dr. Davis&apos; CV
                  </Link>
                </div>
                <div className="w-3/4">{professor.description}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex h-full w-full flex-col items-center rounded-t-xl bg-auburnBlue-900 p-6 text-white">
          <div className="flex max-w-7xl flex-col gap-6">
            <div className="text-xl font-bold">Graduate Students</div>
            <div className="grid grid-cols-4 gap-8">
              {graduateStudents.map((student, index) => (
                <StudentCard key={index} {...student} />
              ))}
            </div>
            <div className="text-xl font-bold">Undergraduate Students</div>
            <div className="grid grid-cols-4 gap-6">
              {undergraduateStudents.map((student, index) => (
                <StudentCard key={index} {...student} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
