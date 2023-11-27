import { type Funding } from "public/data/funding";
import Image from "next/image";

const FundingCard = (fund: Funding) => {
  return (
    <div className="flex gap-6 text-auburnBlue-900">
      <div className="min-w-[150px] font-bold text-auburnOrange-900">
        {fund.startDate.toLocaleString("default", {
          month: "long",
          year: "numeric",
        })}
      </div>
      <div className="flex flex-col gap-2 border-l-2 border-gray-200 pl-6">
        <div className="font-bold">{fund.name}</div>
        <div>{fund.names}</div>
        <div className="flex items-center gap-2">
          <Image
            src="/svgs/Calendar.svg"
            height={24}
            width={24}
            alt="Calendar"
          />
          <div>
            {fund.startDate.toLocaleString("default", {
              month: "numeric",
              day: "numeric",
              year: "numeric",
            })}{" "}
            -{" "}
            {fund.endDate.toLocaleString("default", {
              month: "numeric",
              day: "numeric",
              year: "numeric",
            })}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Image src="/svgs/Bank.svg" height={24} width={24} alt="Bank" />
          <div>
            {fund.funding.toLocaleString("default", {
              style: "currency",
              currency: "USD",
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingCard;
