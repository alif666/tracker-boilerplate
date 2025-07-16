"use server";
import CustomDropdown from "./utils/CustomDropdown";
import { getDevicesCount, getDevicesPaginated } from "../device/utils/apiDevices";
import DeviceListTable from "./DeviceListTable";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense>
      <DeviceListTable />

    </Suspense>
  );
}
