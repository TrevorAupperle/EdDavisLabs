import { type Student } from "public/data/people";
import Image from "next/image";

const StudentCard = (student: Student) => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl bg-auburnBlue-800 px-4 py-6">
      <div className="font-bold">{student.name}</div>
      <div>
        {student.undergraduate ? "Undergraduate Student" : "Graduate Student"}
      </div>
      <div className="h-[1px] w-full bg-white" />
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Image
            src="/svgs/OrangeCalendar.svg"
            height={24}
            width={24}
            alt="Calendar"
          />
          <div>
            {student.endSemester != ""
              ? student.startSemester + " - " + student.endSemester
              : student.startSemester}
          </div>
        </div>
        {student.title != "" && (
          <div className="flex items-start gap-2">
            <Image
              src="/svgs/GradCap.svg"
              height={24}
              width={24}
              alt="Calendar"
            />
            <div>{student.title}</div>
          </div>
        )}
        {student.description != "" && (
          <div className="flex items-start gap-2">
            <Image
              src="/svgs/ReportFile.svg"
              height={24}
              width={24}
              alt="Calendar"
            />
            <div>{student.description}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentCard;
