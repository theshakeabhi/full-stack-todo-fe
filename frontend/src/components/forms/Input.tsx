import React from "react";

type Props = { labelName?: string } & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const InputComp = ({ labelName, ...props }: Props) => {
  return (
    <div className="col-span-full">
      {labelName && (
        <label
          htmlFor="about"
          className="block text-sm/6 font-medium text-gray-900"
        >
          {labelName}
        </label>
      )}
      <input
        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
        {...props}
      />
    </div>
  );
};

const Input = React.memo(InputComp);
export default Input;
