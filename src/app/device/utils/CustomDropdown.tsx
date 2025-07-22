"use client";

import React, { useState } from 'react';

const options = [
    { value: 10, text: '10' },
    { value: 50, text: '50' },
    { value: 100, text: '100' },
];

interface CustomDropdownProps {
    handleOnSelect: (value: number) => void;
}

export default function CustomDropdown({ handleOnSelect }: CustomDropdownProps) {
    const [selected, setSelected] = useState<number>(5); // default to 5

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = parseInt(e.target.value, 10);
        setSelected(value);         // update local dropdown state
        handleOnSelect(value);      // notify parent (DeviceListTable)
    };

    return (
        <select
            onChange={handleChange}
            name="resultsPerPage"
            value={selected}
            className="text-right bg-transparent gap-2 rounded-sm"
        >
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.text}
                </option>
            ))}
        </select>
    );
}
