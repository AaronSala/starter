import { useRef } from "react";

function Contacts() {
    const inputElement = useRef();

    const focusInput=() => {
        inputElement.current.focus()
    }
    return (<>
        <input type="text" ref={inputElement}></input>
        <button onClick={focusInput}>Focus Element</button>
    </>
    );
}

export default Contacts;