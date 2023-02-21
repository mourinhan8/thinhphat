import { Form, Input, Button, Select, InputNumber } from 'antd';
import React from 'react';
import axios from 'axios';

const MyFormItemContext = React.createContext([]);
const { Option } = Select;

const API = process.env.NEXT_PUBLIC_API_BACKEND;

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
  const onFinish = async (value) => {
    console.log(value);
    const option = {
      method: 'post',
      url: `${API}/employee/create`,
      data: value.data,
      headers: {
        Authorization: sessionStorage.access_token, //the token is a variable which holds the token
      },
    };
    const response = await axios(option);
    console.log(response);
  };
  return (
    <>
      <Form name="form_item_path" layout="vertical" onFinish={onFinish}>
        <MyFormItemGroup prefix={['data']}>
          <MyFormItem name="username" label="Tên đăng nhập">
            <Input />
          </MyFormItem>
          <MyFormItem name="password" label="Mật khẩu">
            <Input />
          </MyFormItem>
          <MyFormItem name="full_name" label="Họ và tên">
            <Input />
          </MyFormItem>
          <MyFormItem name="position" label="Chức vụ">
            <Select>
              <Option value="2">Kỹ thuật</Option>
              <Option value="3">Quản lý</Option>
            </Select>
          </MyFormItem>
          <MyFormItem name="mission" label="Nhiệm vụ">
            <Select>
              <Option value="1">Xử lý hồ sơ</Option>
              <Option value="2">Quản lý thu chi</Option>
              <Option value="3">Tiếp nhận, phân công, tổng hợp báo cáo HS</Option>
            </Select>
          </MyFormItem>
          <MyFormItem name="office" label="Văn phòng">
            <Input />
          </MyFormItem>
          <MyFormItem name="phone_number" label="Số điện thoại">
            <InputNumber style={{ width: '100%' }} />
          </MyFormItem>
        </MyFormItemGroup>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}
