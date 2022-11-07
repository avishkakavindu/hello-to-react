import './formInputs.css';
import { useState } from 'react';

export const FormInput = (props) => {
  const { id, label, onChange, errorMessage, ...inputProps } = props;

  const [focused, setFocused] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <div className='formInput'>
      <label>{label}</label>
      <input
        id={id}
        onChange={onChange}
        {...inputProps}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <br />
      <span>{errorMessage}</span>
    </div>
  );
};
