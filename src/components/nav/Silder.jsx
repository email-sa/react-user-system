import React from "react";
import { Menu } from "antd";
import {
    PieChartOutlined,
    MailOutlined,
    BankOutlined,
    UserOutlined,
    MenuOutlined,
    ControlOutlined,
    GlobalOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;
const menuList = [
    { key: "/", icon: BankOutlined, title: "概况", level: 1 },
    { key: "2", icon: PieChartOutlined, title: "统计", level: 1 },
    {
        key: "3",
        icon: UserOutlined,
        title: "用户",
        level: 1,
        children: [
            {
                text: "用户管理",
                key: "/user",
                icon: MailOutlined
                // url: "/user"
            },
            { text: "角色管理", key: "3-2", icon: MailOutlined },
            { text: "权限管理", key: "3-3", icon: MailOutlined }
        ]
    },
    {
        key: "4",
        icon: MenuOutlined,
        title: "导航管理",
        children: [{ text: "菜单管理", key: "4-1", icon: MailOutlined }]
    },
    {
        key: "5",
        icon: ControlOutlined,
        title: "网页配置",
        children: [
            { text: "轮播图", key: "5-1", icon: MailOutlined },
            { text: "导航菜单", key: "5-2", icon: MailOutlined }
        ]
    },
    {
        key: "6",
        icon: GlobalOutlined,
        title: "资源",
        children: [
            { text: "轮播图管理", key: "6-1", icon: MailOutlined },
            { text: "菜单", key: "6-2", icon: MailOutlined }
        ]
    }
];
class Silder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: menuList
        };
    }
    handleClick = (e) => {
        if (e.key) {
            this.props.history.push(e.key);
        }
    };

    render() {
        return (
            <Menu
                className={this.props.className}
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={["/"]}
                defaultOpenKeys={["sub1"]}
                mode="inline">
                {}
                {this.state.menuList.map((menu) =>
                    menu?.children?.length ? (
                        <SubMenu
                            icon={<menu.icon />}
                            title={menu.title}
                            key={menu.key}>
                            {menu.children.map((child) => (
                                <Menu.Item
                                    icon={<child.icon />}
                                    key={child.key}>
                                    {child.text}
                                </Menu.Item>
                            ))}
                        </SubMenu>
                    ) : (
                        <Menu.Item
                            url={menu.url}
                            key={menu.key}
                            icon={<menu.icon />}>
                            {menu.title}
                        </Menu.Item>
                    )
                )}
            </Menu>
        );
    }
}

export default Silder;
