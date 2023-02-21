import EmployeeForm from '../../components/Form/Employee';
import AdminLayout from '../../layouts/Admin';

export default function CreateEmployee() {
  return (
    <>
      <EmployeeForm />
    </>
  );
}

CreateEmployee.Layout = AdminLayout;
CreateEmployee.auth = true;
