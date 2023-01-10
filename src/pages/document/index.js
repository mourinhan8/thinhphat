import AdminLayout from "../../layouts/Admin";
import { Table } from "../../components/table/tableDocument";

export default function Admin() {
    return (
        <>
            <Table />
        </>
    );
}

Admin.Layout = AdminLayout;