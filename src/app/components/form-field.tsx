interface FormFieldProps {
    htmlFor: string
    label: string
    type?: string
    value: any
    onChange?: (...args: any) => any
  }
  
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  export function FormField({ htmlFor, label, type = 'text', value, onChange = () => {} }: FormFieldProps) {
    return (
      <>
        <label htmlFor={htmlFor} className="text-blue-600 font-semibold">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type}
          id={htmlFor}
          name={htmlFor}
          className="w-full p-2 rounded-xl my-2 text-error-dark"
          value={value}
        />
      </>
    )
  }