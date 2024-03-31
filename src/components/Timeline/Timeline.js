import React from 'react'
import HorizontalTimeline from "react-horizontal-timeline";
import { useState } from 'react';
import Spost from '../Post/Spost';

function Timeline() {
    const [value, setValue] = useState(0);
    const [previous, setPrevious] = useState(0);
 
    // Values should be only date
    const VALUES = ["2021-01-01", "2021-01-15", "2021-03-22"];
 
    // Description array corresponding to values
    const description = [
        <Spost/>,
        <Spost/>,
        <Spost/>
    ];
  return (
    <div className="root-div mt-[50px]">
            <div style={{
                width: "95%",
                height: "100px",
                margin: "0 auto",
                fontFamily: 'El Messiri'
            }} className='text-nowrap'>
                <HorizontalTimeline
                    styles={{ outline: "#DFA867", foreground: "#19295C" }}
                    index={value}
                    indexClick={(index) => {
                        setValue(index);
                        setPrevious(value);
                    }}
                    values={VALUES}
                />
            </div>
            <div className="text-center">{description[value]}</div>
        </div>
    );
  
}

export default Timeline
