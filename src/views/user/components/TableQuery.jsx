import React, { Component } from "react";
import { Form, Input, Button, Select } from "antd";
import { query } from "./../utils";
const { Option } = Select;

const layout = {
    labelCol: { span: 2 },
    wrapperCol: { span: 6 }
};
const tailLayout = {
    wrapperCol: {
        offset: 2,
        span: 6
    }
};

class TableQuery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {}
        };
        this.formRef = React.createRef();
    }
    componentDidMount() {
        this.formRef.current.setFieldsValue({});
    }
    componentDidUpdate() {
        this.formRef.current.setFieldsValue({});
    }

    onFinish = (values) => {
        console.log(values, this.formRef);
        this.props.searchList(values);
    };
    onReset = () => {
        this.formRef.current.resetFields();
    };
    getTypeComponent = (type) => {
        switch (type) {
            case "Input":
                return <Input />;
            case "select":
                return <Input />;

            default:
                break;
        }
    };

    render() {
        return (
            <div>
                <Form
                    {...layout}
                    ref={this.formRef}
                    name="control-hooks"
                    onFinish={this.onFinish}>
                    {/* {query.map((item) => {
                        return (
                            <Form.Item
                                key={item.key}
                                name={item.key}
                                label={item.label}
                                rules={item.rules ?? []}>
                                {this.getTypeComponent(item.type)}
                            </Form.Item>
                        );
                    })} */}
                    <Form.Item name="name" label="姓名">
                        <Input />
                    </Form.Item>
                    <Form.Item name="gender" label="性别">
                        <Select
                            placeholder="请选择性别"
                            onChange={this.onGenderChange}
                            allowClear>
                            <Option value="0">男</Option>
                            <Option value="1">女</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary" htmlType="submit">
                            搜索
                        </Button>
                        <Button htmlType="button" onClick={this.onReset}>
                            清空
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}
export default TableQuery;
