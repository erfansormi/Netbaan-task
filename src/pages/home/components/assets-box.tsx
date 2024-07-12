import { ReactNode } from "react";
import { ApiResponseType } from "../../../types/api";
import { Bug, Earth, Globe, MoveUpRight, UploadCloud, Zap } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const AssetsBox = (data: ApiResponseType.AssetsBox & { type: "domain" | "ip" | "cloud" }) => {
  const [, setSearchParams] = useSearchParams();

  return (
    <div
      className="p-3 cursor-pointer hover:scale-105 transition-transform duration-300 rounded-xl bg-brand-gray-700 flex flex-col *:pb-2 divide-y divide-zinc-500 text-white font-semibold text-sm"
      onClick={() => {
        setSearchParams({ "assets-type": data.type });
      }}
    >
      <div className="flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="size-14 overflow-hidden rounded-xl flex flex-col">
            <div
              className={`grow center ${
                data.type === "domain"
                  ? "bg-orange-500"
                  : data.type === "ip"
                  ? "bg-indigo-500"
                  : "bg-lime-500"
              }`}
            >
              {data.type === "cloud" ? <UploadCloud size={26} /> : <Earth size={26} />}
            </div>
            <div className="h-5 font-bold bg-white center text-zinc-900">{data.total}</div>
          </div>
          <h2 className="capitalize">{data.type}</h2>
        </div>

        <div>
          <MoveUpRight />
        </div>
      </div>

      <div className="!py-3 flex items-center gap-4 px-2">
        <div className="w-1/2 flex items-center gap-3">
          <div className="flex flex-col">
            <span>Live</span>
            <span className="text-base">{data.total_live}</span>
          </div>
          <div>
            <img src="/public/chart.svg" />
          </div>
        </div>

        <div className="w-1/2 flex items-center gap-3">
          <div className="flex flex-col">
            <span>Monitored</span>
            <span className="text-base">{data.total_monitored}</span>
          </div>
          <div>
            <img src="/public/chart.svg" />
          </div>
        </div>
      </div>

      <div className="flex items-center !pt-5 *:basis-1/3 gap-x-2 gap-y-3">
        <AssetsBoxIcon icon={<Globe />} title="IPs" value={data.ips} />
        <AssetsBoxIcon icon={<Zap />} title="Ports" value={data.ports} />
        <AssetsBoxIcon icon={<Bug />} title="Vulns" value={data.vulns} />
      </div>
    </div>
  );
};

export default AssetsBox;

const AssetsBoxIcon = ({
  icon,
  title,
  value,
}: {
  title: string;
  value: string | number;
  icon: ReactNode;
}) => {
  return (
    <div className="flex items-center gap-1.5">
      <div className="rounded-md bg-brand-cyan size-10 center">{icon}</div>
      <div className="flex flex-col">
        <span>{title}</span>
        <span className="text-base leading-none">{value}</span>
      </div>
    </div>
  );
};
