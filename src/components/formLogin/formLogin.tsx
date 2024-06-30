import {MdPhoneEnabled} from "react-icons/md";
import {FaLock} from "react-icons/fa";
import "./Form.css"

type TProps = {
    logPhoneRef: React.LegacyRef<HTMLInputElement>
    LoginPhoneHandler: React.ChangeEventHandler<HTMLInputElement>
    LoginPasswordHandler: React.ChangeEventHandler<HTMLInputElement>
    onClickBtn: () => void
}


export const FormLogin = (props:TProps) => {
    return (
        <div className="section">
            <div className="containers">
                <div className="card-front">
                    <div className="center-wrap">
                        <div className="section">
                            <h4>Login</h4>
                            <div className="form-group">
                                <input onChange={props.LoginPhoneHandler} ref={props.logPhoneRef}
                                       type="phone" name="logphone" className="form-style"
                                       placeholder="Your Phone" id="logphone" autoComplete="off"/>
                                <label htmlFor="logphone">Your Phone</label>
                                <i className="input-icon"><MdPhoneEnabled/></i>
                            </div>
                            <div className="form-group">
                                <input onChange={props.LoginPasswordHandler} type="password"
                                       name="logpass" className="form-style"
                                       placeholder="Your Password" id="logpass" autoComplete="off"/>
                                <label htmlFor="logpass">Your Password</label>
                                <i className="input-icon"><FaLock/></i>
                            </div>
                            <a onClick={props.onClickBtn} className="btn">submit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}