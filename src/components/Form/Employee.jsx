import { Form, Input, Button } from 'antd';
import React from 'react';

const MyFormItemContext = React.createContext([]);

function toArr(str) {
    return Array.isArray(str) ? str : [str];
}
const MyFormItemGroup = ({ prefix, children }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatPath = React.useMemo(() => [...prefixPath, ...toArr(prefix)], [prefixPath, prefix]);
    return <MyFormItemContext.Provider value={concatPath}>{children}</MyFormItemContext.Provider>;
};
const MyFormItem = ({ name, ...props }) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName = name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;
    return <Form.Item name={concatName} {...props} />;
};

export default function EmployeeForm() {
    const onFinish = (value) => {
        console.log(value);
    };
    return (
        <>
            <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                <MyFormItemGroup prefix={['document']}>
                    <MyFormItem name="firstName" label="Họ và tên">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="lastName" label="Chức vụ">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="age" label="Nhiệm vụ">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="age" label="Văn phòng">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="age" label="Số điện thoại">
                        <Input />
                    </MyFormItem>
                </MyFormItemGroup>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}