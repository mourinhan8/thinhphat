import { Form, Input, Button, Select, InputNumber, Space } from 'antd';
import React from 'react';
import axios from 'axios';

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

const API = process.env.NEXT_PUBLIC_API_BACKEND;

export default function DocumentForm() {
  const onFinish = async (value) => {
    console.log(value);
    const option = {
      method: 'post',
      url: `${API}/document/create`,
      data: value.data,
    };
    const response = await axios(option);
    console.log(response);
  };
  return (
    <>
      <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
        <MyFormItemGroup prefix={['data']}>
          <MyFormItem name="ward" label="Xã/phường">
            <Input />
          </MyFormItem>
          <MyFormItem name="document_name" label="Tên">
            <Input />
          </MyFormItem>
          <MyFormItem name="content" label="Nội dung">
            <Input />
          </MyFormItem>
          <MyFormItem name="received_date" label="Ngày nhận">
            <Input type="date" />
          </MyFormItem>
          <MyFormItem name="phone_number" label="Số điện thoại">
            <InputNumber style={{ width: '100%' }} />
          </MyFormItem>
          <MyFormItem name="page_number" label="Số tờ/thửa">
            <Input />
          </MyFormItem>
          <MyFormItem name="current_area" label="Diện tích hiện trạng">
            <Input style={{ width: '100%' }} />
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
            <Input type="date" />
          </MyFormItem>
          <MyFormItem name="submission_date" label="Ngày trình thẩm định">
            <Input type="date" />
          </MyFormItem>
          <MyFormItem name="appraisal_date" label="Ngày thẩm định">
            <Input type="date" />
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
