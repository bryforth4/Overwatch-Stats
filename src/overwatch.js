import React, { useEffect, useState } from 'react';
import StatCard from "./components/StatCard";

const OverwatchStats = () => {

  const [ overwatchStats, setOverwatchStats ] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://ow-api.com/v1/stats/pc/us/sloppythread-1688/heroes/:heroes');
      const json = await data.json();
      setOverwatchStats(json)
    }
    fetchData()
      .catch((error) => {
        console.log(error)
    })
  }, [ setOverwatchStats ]);

  return <StatCard
    stat={overwatchStats}
  />
}

export default OverwatchStats;
