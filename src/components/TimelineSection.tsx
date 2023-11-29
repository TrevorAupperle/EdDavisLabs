import { type Funding } from "public/data/funding";

const TimelineSection = (props: Funding) => {
  return (
    <div className="flex w-full flex-col gap-4 text-auburnBlue-900">
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="h-px w-4 bg-gray-200 sm:hidden" />
        <div className="flex items-center gap-2">
          <div className="h-1 w-1 rounded-full bg-auburnOrange-900"></div>
          <h4 className="whitespace-nowrap text-sm font-semibold text-auburnOrange-900">
            {props.startDate.toLocaleDateString("en-US", {
              month: "short",
              year: "numeric",
            })}
          </h4>
        </div>
        <div className="hidden h-px w-full bg-gray-300 sm:block" />
      </div>
      <div className="flex flex-col gap-1 px-6 sm:px-0">
        <h4 className="text-base font-bold">{props.name}</h4>
        <h5 className="text-sm font-bold text-auburnOrange-900">
          {props.funding.toLocaleString("default", {
            style: "currency",
            currency: "USD",
          })}
        </h5>
      </div>
    </div>
  );
};

export default TimelineSection;
