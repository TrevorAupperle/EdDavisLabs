import { type Dispatch, type SetStateAction } from "react";
import classNames from "../utils/classNames";

const TextInput = ({
  label,
  value,
  setValue,
  id,
  className,
}: {
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  id: string;
  className?: string;
}) => {
  return (
    <div className={classNames(className ?? "")}>
      <label
        htmlFor={id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <div
          className={classNames(
            "flex rounded-md border-0 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-auburnBlue-900 focus:ring-auburnBlue-900",
          )}
        >
          <input
            type="text"
            name={id}
            id={id}
            autoComplete={id}
            className={classNames(
              "focus:border-primary focus:ring-primary block flex-1 rounded-md border-0 border-gray-300 bg-transparent py-1.5 pl-2 text-gray-900 focus-within:ring-auburnBlue-900 focus:ring-0 sm:text-sm sm:leading-6",
            )}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default TextInput;
