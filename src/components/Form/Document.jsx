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

export default function DocumentForm() {
    const onFinish = (value) => {
        console.log(value);
    };
    return (
        <>
            <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                <MyFormItemGroup prefix={['document']}>
                    <MyFormItem name="firstName" label="Xã/phường">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="lastName" label="Tên">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="age" label="Nội dung">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="age" label="Ngày nhận">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="age" label="Số điện thoại">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="age" label="Số tờ/thửa">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="age" label="Diện tích hiện trạng">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="age" label="Số tờ/thửa">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="age" label="Xử lý chính">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="age" label="Xử lý nội nghiệp">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="age" label="Ngày đo">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="age" label="Ngày thẩm định">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="age" label="Cán bộ thẩm định">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="age" label="Ghi chú">
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