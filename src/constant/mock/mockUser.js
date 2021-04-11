import { NodeCollapseOutlined } from "@ant-design/icons";
var Mock = require("mockjs");

const getUserList = () => {
    const data = Mock.mock({
        "list|4-10": [
            {
                // 属性 id 是一个自增数，起始值为 1，每次增 1
                "id|+1": 1,
                name: "@cname",
                address: "@province",
                "sex|0-1": 0, // 0- 男 1-女
                "age|18-25": 15,
                "hobby|1": ["唱歌", "跳舞", "游泳", "写代码", "看书", "旅游"],
                "friends|1-3": [{ name: "@cname" }]
            }
        ]
    });
    return data.list;
};

const userList = [
    {
        key: "1",
        name: "张三",
        age: 32,
        sex: 0, // 0 男,1 女
        address: "New York No. 1 Lake Park",
        tags: ["nice", "developer"],
        avatar: NodeCollapseOutlined
    },
    {
        key: "2",
        name: "李四",
        age: 42,
        sex: 1,
        address: "London No. 1 Lake Park",
        tags: ["loser"]
    },
    {
        key: "3",
        name: "王二",
        age: 32,
        sex: 0,
        address: "Sidney No. 1 Lake Park",
        tags: ["cool", "teacher"]
    }
];
export { userList, getUserList };
