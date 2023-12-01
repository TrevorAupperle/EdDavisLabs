import Head from "next/head";
import { classes } from "public/data/classes";

export default function Teaching() {
  return (
    <>
      <Head>
        <title>Teaching | Ed Davis Labs</title>
        <meta name="description" content="Website for Dr. Ed Davis" />
        <link rel="icon" href="/svgs/PolymersTest.svg" />
      </Head>
      <div className="flex flex-col items-center">
        <div className="flex max-w-7xl flex-col gap-6 px-4 text-auburnBlue-900">
          <div className="flex flex-col items-center gap-2 pt-4">
            <h2 className="text-center text-3xl font-bold sm:text-left">
              Unlocking Knowledge in Bio-materials Learning
            </h2>
            <p className="text-center">
              Delve into our specialized teaching spectrum, featuring two key
              courses that blend innovative teaching methods and cutting-edge
              content, shaping the future of academic excellence
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-xl font-bold">Current classes</div>
            <div className="flex flex-col gap-4">
              {classes
                .filter((c) => c.currentlyTeaching)
                .map((c, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-2 rounded-md bg-gray-100 px-4 py-2 shadow-sm sm:flex-row"
                  >
                    <div className="flex w-1/3 flex-col gap-1">
                      <div className="whitespace-nowrap font-bold text-auburnOrange-900">
                        {c.name}
                      </div>
                      <div className="whitespace-nowrap font-bold">
                        {c.code}
                      </div>
                      <div className="whitespace-nowrap">
                        {"Last taught " + c.lastTermTaught}
                      </div>
                    </div>
                    <div className="w-full">{c.description}</div>
                  </div>
                ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 pb-6">
            <div className="text-xl font-bold">Previous classes</div>
            <div className="flex flex-col gap-4">
              {classes
                .filter((c) => !c.currentlyTeaching)
                .map((c, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start gap-2 rounded-md bg-gray-100 px-4 py-2 shadow-sm sm:flex-row"
                  >
                    <div className="flex flex-col gap-1 sm:w-1/3">
                      <div className="font-bold text-auburnOrange-900">
                        {c.name}
                      </div>
                      <div className="font-bold">{c.code}</div>
                      <div className="whitespace-nowrap">
                        {"Last taught " + c.lastTermTaught}
                      </div>
                    </div>
                    <div className="w-full">{c.description}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
