import Head from "next/head";
import { currentFunding, fundingHistory } from "public/data/funding";
import FundingCard from "~/components/FundingCard";

const totalFunding = currentFunding
  .concat(fundingHistory)
  .reduce((acc, fund) => acc + fund.funding, 0)
  .toLocaleString("default", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

const stats = [
  { label: "Funded Research", value: totalFunding },
  {
    label: "Research Projects",
    value: currentFunding.concat(fundingHistory).length,
  },
  { label: " Publications & Reports", value: "40" },
  { label: "Presentations", value: "100+" },
];

export default function Research() {
  return (
    <>
      <Head>
        <title>Research | Ed Davis Labs</title>
        <meta name="description" content="Website for Dr. Ed Davis" />
        <link rel="icon" href="/svgs/PolymersTest.svg" />
      </Head>
      <div className="flex flex-col items-center">
        <div className="flex max-w-7xl flex-col gap-6 px-4 text-auburnBlue-900">
          <div className="flex flex-col items-center gap-2 pt-4">
            <h2 className="text-center text-3xl font-bold sm:text-left">
              Journey of Bio-materials Discovery
            </h2>
            <p className="text-center">
              Dive into our extensive portfolio of innovative biomaterials
              research, spanning both current endeavors and past groundbreaking
              projects, supported by diverse funding sources
            </p>
          </div>
          <div className="flex flex-col divide-y-2 divide-white rounded-lg bg-orange-500 bg-opacity-10 md:flex-row md:divide-x-2">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex w-full flex-col items-center gap-2 p-8"
              >
                <div className="text-3xl font-bold">{stat.value}</div>
                <div className="text-center">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-6">
            <div className="text-xl font-bold">Current funding</div>
            <div className="flex flex-col gap-4">
              {currentFunding.map((fund, index) => (
                <FundingCard key={index} {...fund} />
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-6 pb-6">
            <div className="text-xl font-bold">Previous funding</div>
            <div className="flex flex-col gap-4">
              {fundingHistory.map((fund, index) => (
                <FundingCard key={index} {...fund} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
