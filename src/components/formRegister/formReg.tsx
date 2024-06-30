import {MdPhoneEnabled} from "react-icons/md";
import {FaLock} from "react-icons/fa";
import "./formreg.css"
import {ChangeEventHandler, MouseEventHandler} from "react";


type TProps = {
    logPhoneRef: React.LegacyRef<HTMLInputElement>
    onChange: ChangeEventHandler<HTMLInputElement>
    Click: MouseEventHandler<HTMLAnchorElement>
}

export const FormReg = (props:TProps) => {
    return (
        <div className="section regSection">
            <div className="containers RegContainers">
                <div className="card-front">
                    <div className="center-wrap">
                        <div className="section regSection">
                            <h4>Register</h4>
                            <div className="form-group">
                                <input onChange={props.onChange} type="text" name="first_name" className="form-style"
                                       placeholder="Name" id="first_name" autoComplete="off"/>
                                <label htmlFor="first_name">Name</label>
                                <i className="input-icon"><MdPhoneEnabled/></i>
                            </div>
                            <div className="form-group">
                                <input type="text" onChange={props.onChange} name="last_name" className="form-style"
                                       placeholder="Surname" id="last_name" autoComplete="off"/>
                                <label htmlFor="last_name">Surname</label>
                                <i className="input-icon"><MdPhoneEnabled/></i>
                            </div>
                            <div className="form-group">
                                <input onChange={props.onChange} type="phone" ref={props.logPhoneRef} name="phone" className="form-style"
                                       placeholder="Your Phone" id="phone" autoComplete="off"/>
                                <label htmlFor="phone">Your Phone</label>
                                <i className="input-icon"><MdPhoneEnabled/></i>
                            </div>
                            <div className="form-group">
                                <input onChange={props.onChange} type="password" name="password" className="form-style"
                                       placeholder="Your Password" id="logpass" autoComplete="off"/>
                                <label htmlFor="logpass">Your Password</label>
                                <i className="input-icon"><FaLock/></i>
                            </div>
                            <a onClick={props.Click} className="btn">submit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}