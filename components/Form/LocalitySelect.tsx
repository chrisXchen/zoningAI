import React from 'react';

function Dropdown({ options, onChange, value, ...props }) {
    return (
        <select
            value={value}
            onChange={onChange}
            className={`px-4 py-2 w-full
                overflow-auto scrollbar-hide
                text-black
                bg-white
                border-black border-2 rounded-lg
                hover:bg-black hover:text-white
                focus:outline-none
                shadow-nb-user
            `}
            {...props}
        >
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default Dropdown;
