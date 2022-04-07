import React, { useEffect, useState } from 'react';

const OverwatchStats = () => {

    const [ overwatchStats, setOverwatchStats ] = useState([]);
    
    console.log(overwatchStats);

    useEffect(() => {
        fetch('https://ow-api.com/v1/stats/pc/us/sloppythread-1688/heroes/:heroes')
            .then((promise) => {
                let data = promise.json();
                setOverwatchStats(data);
            }); 
    }, [ setOverwatchStats ]);

    return <>{overwatchStats[0].competitiveStats}</>
}

export default OverwatchStats;