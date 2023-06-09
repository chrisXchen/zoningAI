import { FC, InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const FormInput: FC<Props> = ({ label, ...inputProps }) => {
  return (
    <label className="text-neutral-900 font-semibold">
      {label}
      <input
        {...inputProps}
        className="border border-neutral-300 p-2 rounded"
      />
    </label>
  );
};
