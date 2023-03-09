import './style.css';
export function TextInput({
  labelText,
  inputName,
  inputValue,
  onChange,
  placeholder,
  inputType,
  defaultValue,
  forId,
}) {
  return (
    <>
      <label htmlFor={forId}>{labelText}</label>
      <input
        type={inputType}
        placeholder={placeholder}
        className="input-text"
        id={forId}
        name={inputName}
        autoComplete="off"
        value={inputValue}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </>
  );
}
