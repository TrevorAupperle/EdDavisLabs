export type TimelineSectionProps = {
  date: string;
  title: string;
  funding: string;
  description: string;
};

const TimelineSection = (props: TimelineSectionProps) => {
  return (
    <div className="text-auburnBlue-900 flex w-full flex-col gap-4">
      <div className="flex items-center gap-2 sm:gap-4">
        <div className="h-px w-4 bg-gray-200 sm:hidden" />
        <div className="flex items-center gap-2">
          <div className="bg-auburnOrange-900 h-1 w-1 rounded-full"></div>
          <h4 className="text-auburnOrange-900 whitespace-nowrap text-sm font-semibold">
            {props.date}
          </h4>
        </div>
        <div className="hidden h-px w-full bg-gray-300 sm:block" />
      </div>
      <div className="flex flex-col gap-1 px-6 sm:px-0">
        <h4 className="text-base font-bold">{props.title}</h4>
        <h5 className="text-auburnOrange-900 text-sm font-bold">
          {props.funding}
        </h5>
      </div>
      <p className="px-6 text-sm sm:px-0">{props.description}</p>
    </div>
  );
};

export default TimelineSection;
