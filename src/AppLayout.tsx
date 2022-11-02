import { Layout} from 'antd' 
import AppMenu from './AppMenu'
import styles from '../styles/Layout.module.scss'

const {Header, Content, Footer, Sider} = Layout

export default function AppLayout({children}){
    return(
        <Layout hasSider>
            <Sider
            style={{
                overflow: "auto",
                height: '100vh',
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                backgroundColor: "white"
            }}
            theme="dark"
            >
                <div style={{ padding: "16px"}} >
                    <img src='/logo2png.png' alt='logo' height="32px" width="auto" />
                </div>
                <AppMenu />
            </Sider>
            <Layout style={{marginLeft: "200px"}}>
                <Header style={{background: "#fff"}}/>
                <Content className={styles.app_content_container}>
                    {children}
                </Content>
            </Layout>
        </Layout>
    )
}