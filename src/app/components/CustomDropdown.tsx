

"use client";

import React, { useEffect, useState } from 'react';
import { getDevicesPaginated } from '../device/utils/apiDevices';


export default function CustomDropdown() {
    const [selected, setSelected] = useState<number>(0);

    //   log
    useEffect(() => {
        console.log("selected ", selected);
    const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
            setSelected(Number(e.target.value));
            getDevicesPaginated(1, selected);
        }
    }, [selected, setSelected]);
    
    /* correct options array */
    const options = [
        { value: 5, text: '5' },
        { value: 10, text: '10' },
        { value: 50, text: '50' },
        { value: 100, text: '100' },
    ];




    return (
        <select
            name="resultsPerPage"
            value={selected}
            onChange={handleChange}
            className="border rounded p-1"
        >
            {options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                    {opt.text}
                </option>
            ))}
        </select>
    );
}
