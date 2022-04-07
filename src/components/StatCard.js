import React from "react";

const StatCard = (props) => {

  const { stat } = props;

  console.log(stat)
  return<>
    <label>{stat.endorsement}</label>
    <img
      src={stat.levelIcon}
      width="50"
      height="50"
    />
  </>
}

export default StatCard;