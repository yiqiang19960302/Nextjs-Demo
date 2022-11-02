import { Space, Typography, Form, FormInstance, Tabs, Input, Checkbox, Button } from 'antd'
import { useState } from 'react'
import { MailOutlined, LockOutlined }  from "@ant-design/icons"
import styles from '../styles/Login.module.scss'

export default function Login() {
    const [loginMethod, setLoginMethod] = useState<"email"|"phone">("email")

    const [form] = Form.useForm<FormInstance<any>>()
    return (
        <div style={{ maxWidth: '400px', margin: "auto", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
            <Space direction="vertical" align="center">
                <img src="/logo2png.png" alt='logo' height="48px" width="auto" />
                <Typography.Text type="secondary">Welcome to HiCloud</Typography.Text>
            </Space>
            <Form
                name="login"
                style={{ width: "100%" }}
                autoComplete="off"
                size="large"
                form={form}
            >
                <Tabs
                activeKey={loginMethod}
                centered
                className={styles.tabs_without_border}
                onChange={(activeKey)=>setLoginMethod(activeKey as 'email'|'phone')}
                items={[
                    {
                        label: "Login with Email",
                        key: "email",
                        children:<Form.Item name={'email'} rules={[{required: true, message: "Email is required"}]}>
                            <Input placeholder='Email' prefix={<MailOutlined style={{color: "grey", marginRight: "8px"}}/>}/>
                        </Form.Item>
                    },
                    {
                        label: "Login with Phone",
                        key: "phone",
                        children: <Form.Item name={'phone'}>
                        <Input placeholder='Phone Number' prefix={<MailOutlined style={{color: "grey", marginRight: "8px"}}/>}/>
                    </Form.Item>
                    }
                ]}
                />
                <Form.Item name="password" rules={[{ required: true, message: "Password is required" }]} hasFeedback>
                    <Input.Password prefix={<LockOutlined style={{color: "grey", marginRight: "8px"}}/>} placeholder='Password'/>
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName='checked' noStyle>
                        <Checkbox>Remember Me</Checkbox>
                    </Form.Item>
                    <a style={{float: "right"}}>Forgot Password?</a>
                </Form.Item>
                <Form.Item>
                    <div className={styles.login_button}>
                        <Button type="primary">Log in</Button>
                    </div>
                    <div style={{marginTop: "8px"}}>
                        <Typography.Text type='secondary'>Don't have an account?</Typography.Text>
                        <a style={{float: "right"}} href="/register">Sign up</a>
                    </div>
                </Form.Item>
            </Form>
        </div>
    )
}