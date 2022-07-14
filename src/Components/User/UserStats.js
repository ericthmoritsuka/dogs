import React, { lazy, Suspense, useEffect } from "react";
import Head from "../Helper/Head";
import useFetch from "../../Hooks/useFetch";
import { STATS_GET } from "../../api";
import Loading from "../Helper/Loading";
import Error from "../Helper/Error";
const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"));

const UserStats = () => {
  const { data, error, loading, request } = useFetch();
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET(token);
      await request(url, options);
    }
    getData();
  }, [request, token]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <Suspense fallback={<div></div>}>
        <Head title="Stats" />
        <UserStatsGraphs data={data} />
      </Suspense>
    );
  else return null;
};

export default UserStats;
