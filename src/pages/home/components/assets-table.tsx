import { X } from "lucide-react";
import { ApiResponseType } from "../../../types/api";
import moment from "moment";
import { useSearchParams } from "react-router-dom";

const AssetsTable = ({ assets }: { assets: ApiResponseType.Asset[] }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const ASSETS_TYPE_PARAM = searchParams.get("assets-type");

  const filteredAssets = ASSETS_TYPE_PARAM
    ? assets.filter((item) => item.type === ASSETS_TYPE_PARAM)
    : assets;

  return (
    <>
      {/* SELECTED FILTER */}
      {ASSETS_TYPE_PARAM && (
        <button
          onClick={() => {
            setSearchParams({
              "assets-type": "",
            });
          }}
          className="rounded-md p-2 text-sm w-fit flex items-center gap-2 mb-2 bg-brand-muted-500 hover:bg-brand-muted-700 duration-300 transition-colors"
        >
          {ASSETS_TYPE_PARAM}
          <X size={16} />
        </button>
      )}

      {/* ASSETS TABLE */}
      <div className="rounded-xl bg-brand-muted-700 flex flex-col gap-10 px-4 py-4 overflow-hidden">
        <h2 className="font-bold">Assets</h2>

        <table className="text-sm border-separate border-spacing-x-0 border-spacing-y-3 overflow-x-scroll text-nowrap">
          <thead className="border-b-[14px] border-brand-muted-700">
            <tr className="capitalize *:bg-brand-muted-300 *:py-2">
              <th className="rounded-l-md">grade</th>
              <th>name</th>
              <th>total vulnerabilities</th>
              <th className="rounded-r-md">last seen</th>
            </tr>
          </thead>

          <tbody className="">
            {filteredAssets.map((item, index) => (
              // TODO: must use id for key after added id to response
              <tr key={index} className="text-center *:py-2 bg-brand-muted-500">
                <td className="rounded-l-md">
                  <div className="center">
                    <div className="hexagon bg-red-500 center size-8">{item.grade}</div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.total_vuls}</td>
                <td className="rounded-r-md">
                  {moment(item.lastSeen).format("YYYY/MM/DD")} at{" "}
                  {moment(item.lastSeen).format("HH:mm")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AssetsTable;
