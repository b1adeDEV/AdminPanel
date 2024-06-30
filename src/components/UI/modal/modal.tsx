import "./modal.css"
import {ChangeEventHandler, MouseEventHandler} from "react";

type TProps = {
    changeModal:ChangeEventHandler<HTMLInputElement>
    checkSecretKey: MouseEventHandler<HTMLButtonElement>
}

export const Modal = (props:TProps) => {
    return (
        <div className="modalSecret">
            <h2>Enter secret key</h2>
            <div className="modalSecretGroup">
                <input onChange={props.changeModal} className="form-style" type="password"/>
                <button onClick={props.checkSecretKey} className={"btn"}>Check</button>
            </div>
        </div>
    )
}