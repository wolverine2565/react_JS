/* global Date */

function CurrentTime1() {
    const currentTime = new Date();
    const formattedTime = currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const formattedDate = currentTime.toLocaleDateString("en-GB");

    return (
        <div className="Time">
            <h2>Current Time: {formattedTime}</h2>
            <h2>Date: {formattedDate}</h2>
        </div>
    );
}

export default CurrentTime1;
