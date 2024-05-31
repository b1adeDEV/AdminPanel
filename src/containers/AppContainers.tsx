import {useState} from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input } from 'antd';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {VscError} from "react-icons/vsc";
import {ImCross} from "react-icons/im";

type FieldType = {
    phone?: string;
    password?: string;
    first_name?: string;
    last_name?: string;
};

const AppContainers = () => {

    const navigate = useNavigate();
    const [error, setError] = useState<string>("");
    const [show, setShow] = useState<boolean>(false)

    const onClickCansel = () => {
        setShow(false);
    }

    const onFinish: FormProps<FieldType>['onFinish'] = async(values) => {
        console.log('Success:', values)

    };

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
                        label="First name"
                        name="first_name"
                        rules={[{required: true, message: 'Please input your first name!'}]}
                    >
                        <Input/>
                    </Form.Item>
                    <Form.Item<FieldType>
                        label="Last name"
                        name="last_name"
                        rules={[{required: true, message: 'Please input your last name!'}]}
                    >
                        <Input/>
                    </Form.Item>

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
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item wrapperCol={{offset: 8, span: 16}}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <div className={show?"alertError":"none"}>
                    <p><VscError /></p>
                    <div>
                        <h3>Error</h3>
                        <p>{error}</p>
                    </div>
                    <button onClick={onClickCansel}><ImCross /></button>
                </div>
            </div>
        )
}

export default AppContainers;