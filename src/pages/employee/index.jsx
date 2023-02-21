import { Table } from '../../components/table/tableEmployee';
import AdminLayout from '../../layouts/Admin';
import { Button } from 'antd';
import { useRouter } from 'next/router';

const Employee = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-row-reverse pb-4">
        <div>
          <Button type="primary" onClick={() => router.push('/createEmployee')} block>
            Thêm nhân viên
          </Button>
        </div>
      </div>
      <Table />
    </>
  );
};

Employee.Layout = AdminLayout;

export default Employee;
