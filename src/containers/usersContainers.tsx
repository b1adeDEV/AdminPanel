import {useEffect, useState} from "react";
import axios from "axios";
import Tables from "../components/tables/table.tsx";
import {Button} from "antd";
import {useNavigate} from "react-router-dom";
import {Loader} from "../components/UI/loader/loader.tsx";
import {TItem} from "../type/type.ts";

export const UsersContainers = () => {

    const [users, setUsers] = useState([])
    const [loader, setLoader] = useState<boolean>(true)
    const navigate = useNavigate()
    const AllUsers = async () => {
        if(localStorage.getItem("Token") == null) {
            navigate("/")
        }else {
            try {
                const response = await axios.get("http://uid.kz:82/api/users/",{
                    headers:{
                        Authorization: `Token ${localStorage.getItem("Token")}`,
                    }
                })
                setLoader(false)
                const user = response.data.map((item:TItem,index:number) => {
                    return {
                        id:index,
                        phone:item.phone,
                        first_name:item.first_name,
                        last_name:item.last_name,
                    }
                });
                setUsers(user)
            }catch(error:any) {
                console.log(error)
            }
        }
    }

    const LogOut = async () => {
        await axios.post("http://uid.kz:82/api/logout/","",{
            headers:{
                authorization: `Token ${localStorage.getItem("Token")}`}
        })
        localStorage.removeItem("Token")
        navigate({pathname:"/"})
    }
    useEffect(() => {
        AllUsers()
    }, []);

    return (
        <div>
            {
                loader? <Loader/>:
                    <>
                        <Tables data={users}/>
                        <div>
                            <Button onClick={LogOut} type="primary" htmlType="submit">
                                Log Out
                            </Button>
                        </div>
                    </>
            }
            </div>
    )
}