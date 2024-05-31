import {MdPeople, MdPhoneEnabled} from "react-icons/md";
import {FaLock} from "react-icons/fa";

type TProps = {
    isChecked:boolean,
    handleCheckboxChange:  React.ChangeEventHandler<HTMLInputElement>
    logPhoneRef: React.LegacyRef<HTMLInputElement>
    LoginPhoneHandler: React.ChangeEventHandler<HTMLInputElement>
    LoginPasswordHandler: React.ChangeEventHandler<HTMLInputElement>
    onClickBtn: () => void
    phoneRef: React.LegacyRef<HTMLInputElement>
    onHandlerFirstName: React.ChangeEventHandler<HTMLInputElement>
    onHandlerLastName: React.ChangeEventHandler<HTMLInputElement>
    onHandlerPhoneChange: React.ChangeEventHandler<HTMLInputElement>
    onHandlerPassword: React.ChangeEventHandler<HTMLInputElement>
}


export const NewForm = (props:TProps) => {
    return (
        <div className="section">
            <div className="container">
                <div className="row full-height justify-content-center">
                    <div className="col-12 text-center align-self-center py-5">
                        <div className="section pb-5 pt-5 pt-sm-2 text-center">
                            <h6 className="infoBtn"><span>Log In </span><span>Sign Up</span></h6>
                            <input checked={props.isChecked} onChange={props.handleCheckboxChange} className="checkbox"
                                   type="checkbox" id="reg-log" name="reg-log"/>
                            <label htmlFor="reg-log"></label>
                            <div className="card-3d-wrap mx-auto">
                                <div className="card-3d-wrapper">
                                    <div className="card-front">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Log In</h4>
                                                <div className="form-group">
                                                    <input onChange={props.LoginPhoneHandler} ref={props.logPhoneRef}
                                                           type="phone" name="logemail" className="form-style"
                                                           placeholder="Your Phone" id="logemail" autoComplete="off"/>
                                                    <i className="input-icon uil uil-at"><MdPhoneEnabled/></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input onChange={props.LoginPasswordHandler} type="password"
                                                           name="logpass" className="form-style"
                                                           placeholder="Your Password" id="logpass" autoComplete="off"/>
                                                    <i className="input-icon uil uil-lock-alt"><FaLock/></i>
                                                </div>
                                                <a onClick={props.onClickBtn} className="btn mt-4">submit</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-back">
                                        <div className="center-wrap">
                                            <div className="section text-center">
                                                <h4 className="mb-4 pb-3">Sign Up</h4>
                                                <div className="form-group">
                                                    <input type="text" onChange={props.onHandlerFirstName}
                                                           name="logFirstname" className="form-style"
                                                           placeholder="Your First Name" id="logFirstname"
                                                           autoComplete="off"/>
                                                    <i className="input-icon uil uil-user"><MdPeople/></i>
                                                </div>
                                                <div className="form-group">
                                                    <input type="text"
                                                           onChange={props.onHandlerLastName}
                                                           name="logLastname" className="form-style"
                                                           placeholder="Your Last Name" id="logLastname"
                                                           autoComplete="off"/>
                                                    <i className="input-icon uil uil-user"><MdPeople/></i>
                                                </div>
                                                <div className="form-group">
                                                    <input ref={props.phoneRef}
                                                           onChange={props.onHandlerPhoneChange}
                                                           type="Phone" id={"form"} className="form-style"
                                                           placeholder="Your Phone"/>
                                                    <i className="input-icon uil uil-at"><MdPhoneEnabled/></i>
                                                </div>
                                                <div className="form-group mt-2">
                                                    <input type="password" name="logpass" className="form-style"
                                                           onChange={props.onHandlerPassword}
                                                           placeholder="Your Password" id="singupPass" autoComplete="off"/>
                                                    <i className="input-icon uil uil-lock-alt"><FaLock/></i>
                                                </div>
                                                <a onClick={props.onClickBtn} className="btn mt-4">submit</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}