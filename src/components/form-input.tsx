import { useId, type ComponentProps } from 'react';

// interface FormInputProps {
//   type?:
//     | 'text'
//     | 'range'
//     | 'password'
//     | 'number'
//     | 'search'
//     | 'color'
//     | 'email';
//   label: string;
//   placeholder?: string;
//   value?: string | number;
//   defaultValue?: string | number;
//   readOnly?: boolean;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   [property: string | number]: unknown;
// }

// interface FormInputProps extends ComponentProps<'input'> {
//   label: string;
// }
// type FormInputProps = ComponentProps<'input'> & {
//   label: string;
// };

// function FormInput({
// type = 'text',
// label,
// placeholder,
// value,
// defaultValue,
// readOnly,
// onChange,
// ...restProps
// }: FormInputProps) {

//   label,
//   ...restProps
// }: ComponentProps<'input'> & {
//   label: string;
// }) {

type FormInputProps = ComponentProps<'input'> & {
  label: string;
};
function FormInput({ label, ...restProps }: FormInputProps) {
  const inputId = useId();

  return (
    <div className="formControl">
      <label htmlFor={inputId}>{label}</label>
      {/* <input
        type={type}
        id={inputId}
        placeholder={placeholder}
        readOnly={readOnly}
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        {...restProps}
      /> */}
      <input id={inputId} {...restProps} />
    </div>
  );
}

export default FormInput;

// export type FormInputProps = ComponentProps<typeof FormInput>;
