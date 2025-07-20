"use client";

import React, { useEffect, useState } from 'react';
import { getDevicesCount, getDevicesPaginated } from './utils/apiDevices';
import CustomDropdown from './utils/CustomDropdown';

interface Device {
    id: string;
    team: string;
    device_name: string;
    device_category: string;
    device_group: string;
    device_branch: string;
    device_ref_id: string;
}

export default function DeviceListTable() {
    const [devicesCount, setDevicesCount] = useState(0);
    const [devices, setDevices] = useState<Device[]>([]);
    const [resultsPerPage, setResultsPerPage] = useState(5); // Default value
    const [totalNumberOfPages, setTotalNumberOfPages] = useState(1);
    useEffect(() => {
        async function fetchData() {
            const [count, error] = await getDevicesCount();

            if (error) {
                console.error("Error fetching count:", error);
                setDevicesCount(0);
                return;
            }

            setDevicesCount(count);
        }

        fetchData();
    }, []);

    useEffect(() => {
        fetchDevices(resultsPerPage);
    }, [resultsPerPage]);

    async function fetchDevices(limit: number) {
        const [deviceList, error] = await getDevicesPaginated(1, limit);

        if (error) {
            console.error("Error fetching devices:", error);
            setDevices([]);
            return;
        }

        setDevices((deviceList as Device[]) || []);
    }
    let pagination: number[] = [];
    function handleOnSelect(recordsPerPage: number) {
        setTotalNumberOfPages(1);
        console.log("devicesCount", devicesCount);
        console.log(typeof devicesCount);

        console.log("recordsPerPage", recordsPerPage);
        console.log(typeof recordsPerPage);
        setTotalNumberOfPages(devicesCount / recordsPerPage);
        console.log(typeof totalNumberOfPages);
        console.log("devicesCount", devicesCount);
        console.log("recordsPerPage", recordsPerPage);


        // getPaginations
        for (let i = 0; i < totalNumberOfPages; i++) {
            pagination.push(i + 1);
        }
        console.log("totalNumberOfPages", totalNumberOfPages);
        console.log("pagination", pagination);
        setResultsPerPage(recordsPerPage);
    }

    return (
        <div>
            <h1 className="text-xl font-semibold mb-4">Devices</h1>

            <div className="flex flex-row justify-between mb-4">
                <span>Total devices: <strong>{devicesCount}</strong></span>
                <CustomDropdown handleOnSelect={handleOnSelect} />
            </div>
            <div className="flex flex-row justify-between mb-4">
                {pagination.map((el: number) => (
                    <span>P<strong>{el}</strong></span>

                ))}
            </div>
            {devices.length === 0 ? (
                <p>No devices found.</p>
            ) : (
                <ul>
                    {devices.map((d) => (
                        <li key={d.id} className="flex gap-4 border p-2 mb-2 text-sm">
                            <span className="basis-1/6">{d.team}</span>
                            <span className="basis-1/6">{d.device_name}</span>
                            <span className="basis-1/6">{d.device_category}</span>
                            <span className="basis-1/6">{d.device_group}</span>
                            <span className="basis-1/6">{d.device_branch}</span>
                            <span className="basis-1/6">{d.device_ref_id}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
