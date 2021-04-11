import React, { Component } from "react";
import { Table, Tag, Space, Button, Modal } from "antd";
import TableQuery from "./components/TableQuery";
import { getUserList } from "./../../constant/mock/mockUser";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { confirm } = Modal;

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: [],
            initData: [],
            loading: true
        };
    }
    columns = [
        {
            title: "姓名",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "性别",
            dataIndex: "sex",
            key: "sex",
            render: (text) => <span>{text === 0 ? "男" : "女"}</span>
        },
        {
            title: "爱好",
            dataIndex: "hobby",
            key: "hobby"
        },
        {
            title: "朋友",
            key: "friends",
            dataIndex: "friends",
            render: (friends) => (
                <>
                    {friends.map((friend, index) => {
                        let color = friends.length > 5 ? "geekblue" : "green";
                        return (
                            <Tag color={color} key={index}>
                                {friend.name}
                            </Tag>
                        );
                    })}
                </>
            )
        },
        {
            title: "Action",
            key: "action",
            render: (text, record) => (
                <Space size="middle">
                    <Button onClick={this.lookUserDetails}>查看 </Button>
                    <Button
                        type="primary"
                        danger
                        onClick={() => this.deleteUser(record)}>
                        删除
                    </Button>
                </Space>
            )
        }
    ];
    componentDidMount() {
        setTimeout(() => {
            const data = getUserList();
            this.initData(data);
        }, 1500);
    }
    initData(data) {
        this.setState({ userList: data, initData: data, loading: false });
    }
    // 搜索
    searchList = ({ name, sex }) => {
        this.setState({ loading: true });
        const data =
            !name && !sex && sex !== 0
                ? this.state.initData
                : this.state.userList.filter((item) => {
                      if (!name) {
                          if (sex || sex !== 0) return item.sex === sex;
                      } else {
                          if (!sex && sex !== 0)
                              return item.name.indexOf(name) !== -1;
                          else
                              return (
                                  item.name.indexOf(name) !== -1 &&
                                  item.sex === sex
                              );
                      }
                  });
        setTimeout(() => {
            this.setState({ userList: data, loading: false });
        }, 1500);
    };
    // 查看
    lookDetails() {}
    // 删除
    deleteUser({ id }) {
        confirm({
            icon: <ExclamationCircleOutlined />,
            content: "确定删除用该用户吗",
            okText: "确定",
            cancelText: "取消",
            onOk: () => {
                const data = this.state.userList.filter(
                    (item) => item.id !== id
                );
                this.initData(data);
            },
            onCancel() {
                console.log("Cancel");
            }
        });
    }
    render() {
        return (
            <div>
                <TableQuery searchList={this.searchList}></TableQuery>
                <Table
                    loading={this.state.loading}
                    columns={this.columns}
                    dataSource={this.state.userList}
                />
            </div>
        );
    }
}
export default User;
