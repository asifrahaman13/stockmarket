import React from 'react'
import "./Gauge.css";
import "./Gauge.css";

import GaugeChart from "react-gauge-chart";

const GaugeChat = () => {
  return (
    <>
    <div>
        <GaugeChart
          id="gauge-chart3"
          nrOfLevels={3}
          colors={["blue", "blue", "white"]}
          arcWidth={0.2}
          percent={0.65}
          textColor={'black'}
          hideText={true} // If you want to hide the text
        />
      </div>
    </>
  )
}

export default GaugeChat