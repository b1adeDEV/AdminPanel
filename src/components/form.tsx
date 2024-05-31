import "./Form.css"
import {ChangeEvent, useEffect, useRef, useState} from "react";
import IMask from 'imask';
import {NewForm} from "./NewForm.tsx";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export const Form = () => {

    const phoneRef = useRef(null);
    const logPhoneRef = useRef(null)
    const [contact,SetContact] = useState({
        first_name:"",
        last_name:"",
        phone:"",
        password:"",
    })
    const [login,SetLogin] = useState({
        phone:"",
        password:""
    })
    const [isChecked, setIsChecked] = useState(false);

    const navigate=useNavigate()

    useEffect(() => {
        if (phoneRef.current) {
            const maskOptions = {
                mask: '+{7}(000)000-00-00',
            };
            IMask(phoneRef.current, maskOptions);
            // @ts-ignore
            IMask(logPhoneRef.current, maskOptions);
        }
    }, []);

    const handleCheckboxChange = (event:any) => {
        setIsChecked(event.target.checked);
    };

    const onHandlerFirstName = (e: ChangeEvent<HTMLInputElement>) => {
        SetContact({
            first_name:e.target.value,
            last_name:contact.last_name,
            phone:contact.phone,
            password:contact.password,
        });
    }

    const onHandlerLastName = (e: ChangeEvent<HTMLInputElement>) => {
        SetContact({
            first_name:contact.first_name,
            last_name:e.target.value,
            phone:contact.phone,
            password:contact.password,
        });
    }
    const onHandlerPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
        let phone = "+" + e.target.value.replace(/\D/g, '')
        SetContact({
            first_name:contact.first_name,
            last_name:contact.last_name,
            phone:phone,
            password:contact.password,
        });
    }
    const onHandlerPassword = (e: ChangeEvent<HTMLInputElement>) => {
        SetContact({
            first_name:contact.first_name,
            last_name:contact.last_name,
            phone:contact.phone,
            password:e.target.value,
        });
    }


    const LoginPhoneHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        let phone = "+" + e.target.value.replace(/\D/g, '')
        SetLogin({
            phone:phone,
            password:login.phone
        })
    }
    const LoginPasswordHandler = (e: ChangeEvent<HTMLInputElement>)=> {
        SetLogin({
            phone:login.phone,
            password:e.target.value
        })
    }

    const onClickBtn = async() => {
        if(isChecked) {
            if(contact.phone.length<=10) {
                console.log("Неправильный формат номера")
            }else {
                console.log(contact)
                try {
                    const response = await axios.post("http://86.107.45.208:81/api/registration/", contact);
                    localStorage.setItem('access', response.data.tokens.access);
                    localStorage.setItem('refresh', response.data.tokens.refresh);
                    navigate({pathname:"/users"})
                } catch (error) {
                    let a:any = error
                    console.log(a)
                }
            }
        }else {
            if(login.phone.length<=10) {
                console.log("Неправильный формат номера")
            }else {
                try {
                    console.log(login)
                    const res = await axios.post("http://86.107.45.208:81/api/login/",login);
                    localStorage.setItem('access', res.data.tokens.access);
                    localStorage.setItem('refresh', res.data.tokens.refresh);
                    navigate({pathname:"/users"})
                } catch (error) {

                }
            }
        }

    }

    return (
        <NewForm
            LoginPasswordHandler={(e)=>LoginPasswordHandler(e)}
            LoginPhoneHandler={(e)=>LoginPhoneHandler(e)}
            handleCheckboxChange={(e)=>handleCheckboxChange(e)}
            isChecked={isChecked}
            logPhoneRef={logPhoneRef}
            onClickBtn={onClickBtn}
            onHandlerFirstName={(e)=>onHandlerFirstName(e)}
            onHandlerLastName={(e)=>onHandlerLastName(e)}
            onHandlerPassword={(e)=>onHandlerPassword(e)}
            onHandlerPhoneChange={(e)=>onHandlerPhoneChange(e)}
            phoneRef={phoneRef}/>
    )
}