import React from "react";

export const InputField = React.memo(({ type = "text", name, placeholder, value, onChange }) => {
  console.log(`InputField Rendered: ${name}`);
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
});
InputField.displayName = "InputField";

export const SelectField = React.memo(({ name, value, onChange, options, defaultLabel }) => {
  console.log(`SelectField Rendered: ${name}`);
  return (
    <select name={name} value={value} onChange={onChange}>
      <option value="">{defaultLabel}</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
});
SelectField.displayName = "SelectField";

export const TextareaField = React.memo(({ name, placeholder, value, onChange }) => {
  console.log(`TextareaField Rendered: ${name}`);
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
});
TextareaField.displayName = "TextareaField";
