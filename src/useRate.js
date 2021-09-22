import { useState, useEffect, useRef } from 'react';

const useRate = (value) => {
    const [rate, setRate] = useState(0);
    const tmIncrease = useRef();
    const tmDecrease = useRef();
    const mounted = useRef();
    
    useEffect(() => {
        if (!mounted.current) {
            setRate(value);
            mounted.current = true;
        } else {
            //decreasing
            if (rate > value) {
                if (tmIncrease.current)
                    clearTimeout(tmIncrease.current);

                tmDecrease.current = setTimeout(() => setRate(rate - 1), 20);
            }
            //Increasing
            else if (rate < value) {
                if (tmDecrease.current)
                    clearTimeout(tmDecrease.current);

                tmIncrease.current = setTimeout(() => setRate(rate + 1), 20);
            }

            console.log("componentDidUpdate");
        }
    }, [rate, value]);

    return rate;
}

export default useRate;