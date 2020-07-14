import React from "react";

function Timer(props) {
    const [counter, setCounter] = React.useState(5);
    // if (counter == 0) {
    //     alert("Time is up!")
    // }
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
