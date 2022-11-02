import {Menu, MenuProps} from 'antd'
import {LayoutOutlined, AccountBookOutlined, DollarCircleOutlined, AuditOutlined, FileUnknownOutlined, ClusterOutlined, TransactionOutlined} from '@ant-design/icons'
import styles from '../styles/Layout.module.scss'

type MenuItem = Required<MenuProps>['items'][number];

export default function AppMenu(){

    const items:MenuItem[] = [
        {
            label: "Home",
            icon: <LayoutOutlined />,
            key:'/index',
        },
        {
            label: "Resources",
            icon: <ClusterOutlined />,
            key:'/resource',
            children: [
                {
                    label: "Virtual machine",
                    key: "/resource/ecs",
                },
                {
                    label: "VPC",
                    key: "/resource/vpc",
                },
                {
                    label: "Security Group",
                    key: "/resource/securityGroup",
                },
                {
                    label: "Key Pair",
                    key: "/resource/keyPair"
                },
                {
                    label: "Tag",
                    key: "/resource/tag"
                }
            ]
        },
        {
            label: "Account",
            icon: <AccountBookOutlined />,
            key: "/fund_account"
        },
        {
            label: "Order",
            icon: <AuditOutlined />,
            key: "/order"
        },
        {
            label: "Bill",
            icon: <DollarCircleOutlined />,
            key: "/customerBill"
        },
        {
            label: "Ticket",
            icon: <FileUnknownOutlined />,
            key: "/tickets"
        },
        {
            label: "Invoice",
            icon: <TransactionOutlined />,
            key: "/invoice"
        }
    ]

    return(
        <Menu
        mode="inline"
        items={items}
        className={styles.app_menu}
        />
    )
}