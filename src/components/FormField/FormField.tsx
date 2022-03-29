import React from "react";
import { FormFieldWrapper } from "./FormField.styles";

interface FormFieldProps {
  label?: string;
  id: string;
  name: string;
  placeholder?: string;
  type?: string;
  value: any;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  isTextarea?: boolean;
}

const FormField = ({
  label,
  id,
  name,
  placeholder,
  type="string",
  value,
  onChange,
  isTextarea
}: FormFieldProps): JSX.Element => {
  return (
    <FormFieldWrapper>
      <label htmlFor={id}>{label}</label>
      <input
        required
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </FormFieldWrapper>
  );
};

export default FormField;
