import React from "react";


function Timer() {
    const [counter, setCounter] = React.useState(30);

    // Third Attempts
    React.useEffect(() => {
        const timer =
            counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    return (
        <div>
            {counter}
        </div>
    );
}


export default (Timer);
