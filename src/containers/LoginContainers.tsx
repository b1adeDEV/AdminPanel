import {Button, Form, type FormProps, Input} from "antd";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {VscError} from "react-icons/vsc";
import {ImCross} from "react-icons/im";

type FieldType = {
    phone?: string;
    password?: string;
};


export const LoginContainers = () => {

    const navigate = useNavigate()
    const [error, setError] = useState<string>("");
    const [show, setShow] = useState<boolean>(false)

    const onFinish: FormProps<FieldType>['onFinish'] = async(values) => {
        console.log('Success:', values)
        try {
            const res = await axios.post("http://86.107.45.208/api/login/", values);
            localStorage.setItem('access', res.data.tokens.access);
            localStorage.setItem('refresh', res.data.tokens.refresh);
            navigate({pathname:"/users"})
        } catch (error) {
            let a:any = error
            setError(a.response.data)
            setShow(true)
        }
    };
    const onClickCansel = () => {
        setShow(false);
    }



    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="form">
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                style={{maxWidth: 600}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >

                <Form.Item<FieldType>
                    label="Phone"
                    name="phone"
                    rules={[{required: true, message: 'Please input your phone!'}]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item<FieldType>
                    label="Password"
                    name="password"
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
            <div className={show ? "alertError" : "none"}>
                <p><VscError/></p>
                <div>
                    <h3>Error</h3>
                    <p>{error}</p>
                </div>
                <button onClick={onClickCansel}><ImCross/></button>
            </div>
        </div>
    )
}