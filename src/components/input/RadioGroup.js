import React from 'react';

const RadioGroup = ({
  className = "mb-5",
  label = "",
  radioLabel,
  setValue,
  value,
  name,
  error,
                    }) => {
  return (
    <div className={className}>
      <div className='font-medium mb-1 min-w-200'>{label}</div>
      {radioLabel.map((v, i) => {
          return (
          <dev key={v} className="mr-5">
            <label htmlFor={name + v} className="mr-5">{v}</label>
            <input
              type="radio"
              name={name}
              id={name + v}
              value={value[i]}
              onChange={(e) => setValue(e)}
            />
          </dev>
          )
      })}
      <small className='font-medium text-red-500'>{error}</small>
    </div>
  );
};

export default RadioGroup;