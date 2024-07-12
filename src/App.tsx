import React, { useEffect, useState } from "react";
import { ApiResponseType } from "./types/api";
import { SERVER_URL } from "./utils/urls";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<ApiResponseType.MetaInfoResponseType | null>(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
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
    fetchData();
  }, []);

  return <div>App</div>;
};

export default App;
