import {FormReg} from "../components/formRegister/formReg.tsx";
import {ChangeEvent, useEffect, useRef, useState} from "react";
import {CustomAlert} from "../components/UI/alert/alert.tsx";
import IMask from "imask";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {Loader} from "../components/UI/loader/loader.tsx";

type TFormReg = {
    last_name: string;
    first_name: string;
    phone: string;
    password: string;
}

export const FormRegContainers = () => {
    const logPhoneRef = useRef(null)
    const [isShaking, setIsShaking] = useState(false);
    const navigate = useNavigate()
    const [loader,setLoader] = useState(false)
    const [regData, setRegData] = useState<TFormReg>({
        last_name: "",
        first_name: "",
        phone: "",
        password: ""
    });
    const[showAlert, setShowAlert] = useState<boolean>(false);
    const [errorStr, setErrorStr] = useState<string>("");
    useEffect(() => {
        if (logPhoneRef.current) {
            const maskOptions = {
                mask: '+{7}(000)000-00-00',
            };
            IMask(logPhoneRef.current, maskOptions);
        }
    }, []);


    const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setRegData({
            ...regData,
            [name]: value
        });
        setShowAlert(false);
        if (name === "phone") {
            setRegData({
                ...regData,
                [name]: "+" + value.replace(/\D/g, '')
            });
        }
    };

    const SendData = async() => {
        if(regData.last_name == "" || regData.first_name == "" || regData.phone == ""|| regData.password == ""){
            setShowAlert(true);
            setErrorStr("Неверно заполнены поля")
            setIsShaking(true);
            setTimeout(() => {
                setIsShaking(false);
            }, 2000);
        }else {
            if(regData.phone.length < 12){
                setShowAlert(true);
                setErrorStr("Номер некорректный")
                setIsShaking(true);
                setTimeout(() => {
                    setIsShaking(false);
                }, 2000);
            }else {
                setLoader(true)
                const response = await axios.post("http://uid.kz:82/api/registration/",regData);
                console.log(response)
                setLoader(false)
                navigate("/")
            }
        }
    }


    return (
        <>
            <CustomAlert closeAlert={() => setShowAlert(false)} errorStr={errorStr} stateAlert = {showAlert}/>
            <>
                {
                    loader ? <Loader/> :
                        <div className={isShaking ? 'shake-active' : ''}>
                            <FormReg onChange={(e) => handleChange(e)} Click={SendData} logPhoneRef={logPhoneRef}/>
                        </div>
                }
            </>
        </>
    )
}