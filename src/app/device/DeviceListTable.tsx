"use client";
import React, { useEffect, useState } from 'react';
import { getDevicesPaginated } from './utils/apiDevices';
import CustomDropdown from './utils/CustomDropdown';
import { IoFilterCircleOutline } from 'react-icons/io5';
import { Card, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from 'flowbite-react';

interface Device {
    id: string;
    team: string;
    device_name: string;
    device_category: string;
    device_group: string;
    device_branch: string;
    device_ref_id: string;
}

interface DeviceListProps {
    deviceList: Device[];
}

export default function DeviceListTable({ deviceList }: DeviceListProps) {
    const [devices, setDevices] = useState<Device[]>(deviceList);
    const [resultsPerPage, setResultsPerPage] = useState(5);
    const [totalNumberOfPages, setTotalNumberOfPages] = useState(1);


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
        setDevices(deviceList || []);
    }

    function handleOnSelect(recordsPerPage: number) {
        setResultsPerPage(recordsPerPage);
    }

    const pagination = Array.from({ length: totalNumberOfPages }, (_, i) => i + 1);

    return (
        <div>
            Showing Results of <CustomDropdown handleOnSelect={handleOnSelect} />
            <Card>
                <Table id="filter-table">
                    <TableHead className=" p-0">
                        <TableRow className="flex flex-row border gap-4  p-2 mb-2 text-sm">
                            {["Team", "Name", "Category", "Group", "Branch", "Ref. Id"].map((header) => (
                                <TableHeadCell key={header} className="font-medium text-gray-900 whitespace-nowrap dark:text-white basis-1/6">
                                    <span className="flex flex-row items-center justify-center">
                                        <IoFilterCircleOutline className="h-6 w-6" />{header}
                                    </span>
                                </TableHeadCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody className="items-right">
                        {devices.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center text-sm text-white">
                                    No devices found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            devices.map((d: Device) => (
                                <TableRow key={d.id} className="flex gap-4 border-b-1 text-center border-gray-100 p-2 mb-2 text-sm">
                                    <TableCell className="font-medium text-gray-900 whitespace-nowrap dark:text-white basis-1/6">{d.team}</TableCell>
                                    <TableCell className="font-medium text-gray-900 whitespace-nowrap dark:text-white basis-1/6">{d.device_name}</TableCell>
                                    <TableCell className="font-medium text-gray-900 whitespace-nowrap dark:text-white basis-1/6">{d.device_category}</TableCell>
                                    <TableCell className="font-medium text-gray-900 whitespace-nowrap dark:text-white basis-1/6">{d.device_group}</TableCell>
                                    <TableCell className="font-medium text-gray-900 whitespace-nowrap dark:text-white basis-1/6">{d.device_branch}</TableCell>
                                    <TableCell className="font-medium text-gray-900 whitespace-nowrap dark:text-white basis-1/6">{d.device_ref_id}</TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </Card>
        </div>
    );
}
