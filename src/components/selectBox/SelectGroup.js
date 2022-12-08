import React from 'react';

const SelectGroup = (props) => {
    const handleChange = () => {
        console.log("Change");
    }
    const handleFocus = () => {
        console.log("Focus");
    }
    const handleBlur = () => {
        console.log("Blur");
    }
    return (
        <div className="flex items-center relative">
            <select
                className="h-full pl-4 pr-8 border border-gray-500 appearance-none focus:outline-0"
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
            >
                {props.options.map((option) => (
                    <option
                        key={option.name}
                        name={option.name}
                        value={option.value}
                    >
                        {option.text}
                    </option>
                ))}
            </select>
            <img
                className="absolute m-0 mr-2 inline top-1/2 right-0 -translate-y-1/2"
                src="/images/search_select_arrow.png"
                alt=""/>
        </div>
    );
};

export default SelectGroup;