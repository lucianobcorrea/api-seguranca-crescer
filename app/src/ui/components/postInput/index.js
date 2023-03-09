import './style.css';
export function PostInput({
  labelText,
  inputName,
  inputValue,
  onChange,
  placeholder,
  inputType,
}) {
  return (
    <>
      <label htmlFor="textInput">{labelText}</label>
      <textarea
        type={inputType}
        placeholder={placeholder}
        className="input-text"
        id="textInput"
        name={inputName}
        autoComplete="off"
        value={inputValue}
        onChange={onChange}
      />
    </>
  );
}
