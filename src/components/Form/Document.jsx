import { Form, Input, Button, Select, InputNumber, Space, Cascader } from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import React from 'react';

const { TextArea } = Input;
const { Option } = Select;

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

const selectAfter = (
    <Select
        defaultValue="m2"
        style={{
            width: 90,
        }}
    >
        <Option value="m2">m2</Option>
        <Option value="km2">km2</Option>
    </Select>
);

export default function DocumentForm() {
    const onFinish = (value) => {
        console.log(value);
    };
    return (
        <>
            <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
                <MyFormItemGroup prefix={['data']}>
                    <MyFormItem name="wards" label="Xã/phường">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="document_name" label="Tên">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="content" label="Nội dung">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="received_date" label="Ngày nhận">
                        <Input type='date' />
                    </MyFormItem>
                    <MyFormItem name="phone_number" label="Số điện thoại">
                        <InputNumber style={{ width: '100%' }} />
                    </MyFormItem>
                    <MyFormItem name="page_number" label="Số tờ/thửa">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="current_area" label="Diện tích hiện trạng">
                        <Space direction="vertical" style={{ width: '100%' }}>
                            <InputNumber style={{ width: '100%' }} addonAfter={selectAfter} defaultValue={100} />
                        </Space>
                    </MyFormItem>
                    <MyFormItem name="number_certificate" label="Số phát hành GCN">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="main_person" label="Xử lý chính">
                        <Select
                            style={{
                                width: '100%',
                            }}
                            defaultValue=""
                        >
                            <Option value="Mến">Mến</Option>
                        </Select>
                    </MyFormItem>
                    <MyFormItem name="sub_person" label="Xử lý nội nghiệp">
                        <Select
                            style={{
                                width: '100%',
                            }}
                            defaultValue=""
                        >
                            <Option value="Mến">Mến</Option>
                        </Select>
                    </MyFormItem>
                    <MyFormItem name="measure_date" label="Ngày đo">
                        <Input type='date' />
                    </MyFormItem>
                    <MyFormItem name="appraisal_date" label="Ngày thẩm định">
                        <Input type='date' />
                    </MyFormItem>
                    <MyFormItem name="appraiser" label="Cán bộ thẩm định">
                        <Input />
                    </MyFormItem>
                    <MyFormItem name="note" label="Ghi chú">
                        <TextArea rows={4} />
                    </MyFormItem>
                </MyFormItemGroup>

                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}