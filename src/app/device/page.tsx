"use server";
import CustomDropdown from "../components/CustomDropdown";
import { getDevicesCount, getDevicesPaginated } from "../device/utils/apiDevices";

export default async function Page() {
  /* fetch data */
  const [devices, error] = await getDevicesPaginated(1, 2);

  if (error) return <p className="text-red-600">Error in data fetching.</p>;
  if (!devices?.length) return <p>No devices found.</p>;

  const devicesCount = await getDevicesCount();



  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Devices</h1>

      <div className="flex flex-row justify-between mb-4">
        <span>Total devices: <strong>{devicesCount}</strong></span>

        {/* ✅ closed tag + correct prop names */}
        <CustomDropdown />
      </div>

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
    </div>
  );
}
