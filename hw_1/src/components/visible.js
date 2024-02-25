import { useState } from "react";
function Show() {

    const [block, setBlock] = useState(false)

    const blockShow = () => {
        setBlock(!block);
    }


    return (
        <div>
            <button onClick={blockShow}>Show/hide</button>
            <p style={{display: block ? 'block':'none'}}>text</p>
        </div>
      );
}

export default Show;