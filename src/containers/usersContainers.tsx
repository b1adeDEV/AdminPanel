import {useEffect, useState} from "react";
import axios from "axios";
import Tables from "../components/table.tsx";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";


export const UsersContainers = () => {

    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    const refrechToken = async () => {
        if (localStorage.getItem("refresh")){
            try{
                const a = {
                    refresh: localStorage.getItem("refresh")
                }
                console.log(a)
                const res = await axios.post("http://86.107.45.208:81/api/token/refresh/",a, {
                    headers:{
                        "Content-Type": "application/json"
                    }
                })
                console.log(res)
                localStorage.setItem('access', res.data.access);
                localStorage.setItem('refresh', res.data.refresh);
                AllUsers()
            }catch(error){
                if(error.response.data.detail == "Token is invalid or expired"){
                    navigate({pathname:"/"})
                }
                console.log(error)
            }
        }
    }


    const AllUsers = async () => {
       try {
           const response = await axios.get("http://86.107.45.208:81/api/users/",{
               headers:{
                   authorization: `Bearer ${localStorage.getItem("access")}`,
               }
           })
           let a = response.data.map((item:any,index:number) => {
               return {
                   id:index,
                   phone:item.phone,
                   uuid:item.uuid,
                   first_name:item.first_name,
                   last_name:item.last_name,
               }
           });
           setUsers(a)
       }catch(error) {
           if (error.response.status === 401) {
               refrechToken()
           }else {
               console.log(123)

               // navigate({pathname:"/"})
           }
       }
    }

    const LogOut = async () => {
        await axios.post("http://86.107.45.208:81/api/logout/","",{
            headers:{
                authorization: `Bearer ${localStorage.getItem("access")} `}
        })
        navigate({pathname:"/"})
        localStorage.removeItem("access")
        localStorage.removeItem("refresh")

    }
    useEffect(() => {
        AllUsers()
    }, []);

    return (
        <div>
            <Tables data={users}/>
            <div>
                <Button onClick={LogOut} type="primary" htmlType="submit">
                    Log Out
                </Button>
            </div>
        </div>
    )
}