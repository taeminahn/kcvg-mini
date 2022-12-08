import React from 'react';
import cls from "classnames";

const SearchInput = ({
     className = "mb-5 h-full relative",
     type = "text",
     placeholder = "",
     value,
     setValue,
     name,
     onClick,
}) => {
    return (
        <div className={className}>
            <input
                type={type}
                className={cls(`h-full min-w-300 border border-gray-500 pl-2 pr-12 focus:outline-0`,
                )}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={(e) => setValue(e.target)}
            />
            <button
                type="submit"
                onClick={onClick}
                className="h-full w-12 flex items-center justify-center absolute top-1/2 right-0 -translate-y-1/2"
            >
                <img
                    className="m-0 inline"
                    src="/images/search_input_icon.png"
                    alt=""/>
            </button>
        </div>
    );
};

export default SearchInput;