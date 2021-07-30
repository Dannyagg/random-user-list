import React from "react";

function Refresh() {

    const refreshPage = () => {
        window.location.reload();
    }

    return (
        <div>
           
            <button title = "click to see new users" className="reload" onClick={refreshPage}>Refresh</button>
        </div>
    );
}

export default Refresh;