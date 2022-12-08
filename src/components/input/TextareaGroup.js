import React from 'react';
import cls from 'classnames';

const TextareaGroup = ({
    className = "mb-5",
    type = "text",
    placeholder = "",
    label = "",
    value,
    setValue,
    name,
    error,
    length,
    inputRef,
                    }) => {
    return (
        <div className={className}>
          <div className='font-medium mb-1 min-w-200'>{label}</div>
            <div className="w-full">
               <textarea
                 ref={inputRef}
                 type={type}
                 className={cls(`w-full min-w-300 p-3 h-60 resize-none transition duration-200 border border-gray-400 rounded bg-gray-50 focus:bg-white focus:outline-0 hover:bg-white`,
                   {"border-red-500": error}
                 )}
                 placeholder={placeholder}
                 value={value}
                 name={name}
                 maxLength={length}
                 onInput={(e) => setValue(e)}
               />
              <small className='font-medium text-red-500'>{error}</small>
            </div>
        </div>
    );
};

export default TextareaGroup;