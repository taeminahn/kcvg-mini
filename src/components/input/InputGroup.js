import React, {memo} from "react";
import PropTypes from 'prop-types'
import cls from 'classnames';

const InputGroup = memo(({
    className = "mb-5",
    type = "text",
    placeholder,
    label,
    value,
    setValue,
    checkValid,
    name,
    error,
    length,
                    }) => {
    return (
        <div className={className}>
            <div className='font-medium mb-1 min-w-200'>{label}</div>
            <div className='w-full'>
              <input
                type={type}
                className={cls(`w-full min-w-300 p-3 transition duration-200 border border-gray-400 rounded bg-gray-50 focus:bg-white focus:outline-0 hover:bg-white`,
                  {"border-red-500": error}
                )}
                placeholder={placeholder}
                value={value}
                name={name}
                maxLength={length}
                onInput={(e) => {setValue(e), checkValid(e)}}
              />
              <small className='font-medium text-red-500'>{error}</small>
            </div>
        </div>
    );
});

InputGroup.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  setValue: PropTypes.func,
  checkValid: PropTypes.func,
  name: PropTypes.string,
  error: PropTypes.string,
  length: PropTypes.string,
};

export default InputGroup;