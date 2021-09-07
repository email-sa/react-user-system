import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import "./index.css";
const Login = () => {
    const loginForm = [
        {
            label: "账户",
            name: "username",
            rules: [
                {
                    required: true,
                    message: "请输入您的账号！"
                }
            ],
            component: <Input />
        },
        {
            label: "密码",
            name: "password",
            rules: [
                {
                    required: true,
                    message: "请输入您的密码！"
                }
            ],
            component: <Input.Password />
        },
        {
            name: "remember",
            valuePropName: "checked",
            wrapperCol: {
                span: 10
            },
            component: <Checkbox>记住密码</Checkbox>
        }
    ];
    const onFinish = (values) => {
        console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div className="login-container flex-center">
            <div className="login-info ">
                <h1 className="login-title">用户管理</h1>
                <Form
                    className="login-form"
                    name="basic"
                    labelCol={{
                        span: 4
                    }}
                    wrapperCol={{
                        span: 14
                    }}
                    initialValues={{
                        remember: true
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off">
                    {loginForm.map((item) => {
                        return (
                            <Form.Item
                                className="flex-center"
                                key={item.name}
                                {...item}>
                                {item.component}
                            </Form.Item>
                        );
                    })}
                    <Form.Item className="flex-center login-btn">
                        <Button type="primary" htmlType="submit" size="middle">
                            登录
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};
export default Login;
