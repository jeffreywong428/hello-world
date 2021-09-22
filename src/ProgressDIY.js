import React, { useState, useRef, useEffect } from 'react';
const ProgressDIY = (props) => {

    const [percent, setPercent] = useState(0);
    const tmIncrease = useRef();
    const tmDecrease = useRef();

    const mounted = useRef();
    useEffect(() => {
        if (!mounted.current) {
            setPercent(props.value);
            mounted.current = true;
        } else {
            //decreasing
            if (percent > props.value) {
                if (tmIncrease.current)
                    clearTimeout(tmIncrease.current);

                tmDecrease.current = setTimeout(() => setPercent(percent - 1), 20);
            }
            //Increasing
            else if (percent < props.value) {
                if (tmDecrease.current)
                    clearTimeout(tmDecrease.current);

                tmIncrease.current = setTimeout(() => setPercent(percent + 1), 20);
            }
        }
    }, [percent, props.value]);

    return (
        <div>
            <div className="progress-back" style={{ backgroundColor: "rgba(0,0,0,0.2)", width: "200px", height: "7px", borderRadius: "10px" }}>
                <div className="progress-bar" style={{ backgroundColor: "#fe5196", width: percent.toString() + "%", height: "100%", borderRadius: "10px" }}></div>
            </div>
            目前比率: {percent}%
            <button value={90} onClick={props.onClick}>增加比率至90</button>
            <button value={10} onClick={props.onClick}>減少比率至10</button>
        </div>

    );
}

export default ProgressDIY;
