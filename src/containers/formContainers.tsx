import "../components/formLogin/Form.css"
import {ChangeEvent, useEffect, useRef, useState} from "react";
import IMask from 'imask';
import {FormLogin} from "../components/formLogin/formLogin.tsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {CustomAlert} from "../components/UI/alert/alert.tsx";
import {useHotkeys} from "react-hotkeys-hook";
import {Modal} from "../components/UI/modal/modal.tsx";
import {Loader} from "../components/UI/loader/loader.tsx";
import {FormRegContainers} from "./formRegContainers.tsx";

export const FormContainers = () => {

    const logPhoneRef = useRef(null)
    const [login,SetLogin] = useState({phone:"", password:""})
    const [alertState, setAlertState] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loader, setLoader] = useState(false);
    const [secretKey, setSecretKey] = useState<string>("");
    const [registerForm, setRegister] = useState<boolean>(false);
    const navigate=useNavigate()
    useHotkeys(import.meta.env.VITE_REACT_APP_COMBINATION, () => adminPages(), [])
    useEffect(() => {
        if (logPhoneRef.current) {
            const maskOptions = {
                mask: '+{7}(000)000-00-00',
            };
            IMask(logPhoneRef.current, maskOptions);
        }
    }, []);

    const LoginPhoneHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        const ph_num = "+" + e.target.value.replace(/\D/g, '')
        setAlertState(false)
        SetLogin({
            phone:ph_num,
            password:login.password
        })
    }
    const LoginPasswordHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        SetLogin({
            phone:login.phone,
            password:e.target.value
        })
        setAlertState(false)
    }

    const onClickBtn = async() => {
        if(login.phone.length<=10) {
            setAlertState(true)
        }else {
            try {
                setLoader(true)
                const res = await axios.post("http://uid.kz:82/api/login/",login);
                setLoader(false)
                localStorage.setItem("Token",res.data.token)
                navigate({pathname:"/users"})
            } catch (error) {
                console.log(error)
            }
        }

    }

    const adminPages = ()=> {
        setShowModal(true)
    }
    const changeModal = (e:ChangeEvent<HTMLInputElement>) => {
        setSecretKey(e.target.value);
    }
    const checkSecretKey = () => {
        if(secretKey == import.meta.env.VITE_REACT_APP_SECRET_KEY){
            setSecretKey("")
            setRegister(true)
        }else {
            setSecretKey("")
            setShowModal(false)
        }
    }

    return (
        <>  {
                loader?<Loader/>:
                    <div>
                        {
                            showModal?
                                <>
                                    {
                                        registerForm?<FormRegContainers/>:<Modal changeModal={(e) => changeModal(e)} checkSecretKey={checkSecretKey}/>
                                    }
                                </>
                                :
                        <>
                            <CustomAlert stateAlert = {alertState} closeAlert={() => setAlertState(false)} errorStr={"Неправильный формат номера"}/>
                            <FormLogin
                                LoginPasswordHandler={(e) => LoginPasswordHandler(e)}
                                LoginPhoneHandler={(e) => LoginPhoneHandler(e)}
                                logPhoneRef={logPhoneRef}
                                onClickBtn={onClickBtn}/>
                        </>
                        }
                    </div>
            }

        </>
    )
}
