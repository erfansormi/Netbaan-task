import React, { useEffect, useState } from "react";
import { ApiResponseType } from "../../types/api";
import { SERVER_URL } from "../../utils/urls";
import Skeleton from "../../components/ui/skeleton";
import AssetsBox from "./components/assets-box";
import AssetsTable from "./components/assets-table";
import { RefreshCcw } from "lucide-react";

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ApiResponseType.MetaInfoResponseType | null>(null);
  const [isError, setIsError] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    await fetch(`${SERVER_URL}/metainfo`)
      .then((res) => res.json())
      .then((json: ApiResponseType.MetaInfoResponseType) => {
        setData(json);
        setIsError(false);
      })
      .catch(() => {
        setData(null);
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="bg-brand-gray-900 min-h-screen py-6 w-full h-full">
      <div className="container w-full">
        {isLoading ? (
          <div className="flex flex-col gap-8">
            <div className="grid-cols-3 w-full grid gap-8">
              <Skeleton height={300} />
              <Skeleton height={300} />
              <Skeleton height={300} />
            </div>
            <Skeleton className="w-full min-h-[350px]" />
          </div>
        ) : data ? (
          <div className="flex flex-col gap-8">
            {/* DOMAINS */}
            <div className="grid-cols-3 w-full grid gap-8">
              <AssetsBox type="domain" {...data.domain} />
              <AssetsBox type="ip" {...data.ip} />
              <AssetsBox type="cloud" {...data.cloud} />
            </div>

            {/* ASSETS */}
            <div>
              <AssetsTable assets={data.assets} />
            </div>
          </div>
        ) : (
          isError && (
            <div className="center flex-col gap-2 text-red-500 capitalize">
              <span>An error has occurred!</span>
              <span
                onClick={fetchData}
                className="flex items-center gap-2 hover:underline cursor-pointer"
              >
                <span>try again</span>
                <RefreshCcw className="mt-1" size={16} />
              </span>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default HomePage;
