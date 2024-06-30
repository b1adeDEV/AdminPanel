import { MdErrorOutline } from "react-icons/md"
import { RiCloseLargeFill } from "react-icons/ri"
import {MouseEventHandler} from "react";
import "./alert.css"

type TProps = {
    errorStr: string,
    closeAlert: MouseEventHandler<HTMLButtonElement>,
    stateAlert: boolean,
}

export const CustomAlert = (props:TProps) => {
    return (
        <div className={props.stateAlert ? "alertError":"none"}>
            <p>
                <MdErrorOutline/>
            </p>
            <div>
                <p>{props.errorStr}</p>
            </div>
            <button onClick={props.closeAlert}>
                <RiCloseLargeFill />
            </button>
        </div>
    )
}