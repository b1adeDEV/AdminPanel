import {Button} from "antd";
import {useNavigate} from "react-router-dom";


export const Hub = () => {

    const navigate = useNavigate();

    const login = () => {
        navigate("/login");
    }
    const Signin = () => {
        navigate("/reg");
    }

    return (
        <div className="hub">
            <Button onClick={login} >Log in</Button>
            <Button onClick={Signin} >Sign In</Button>
        </div>
    )
}