import AdminLayout from "../../layouts/Admin";
import { Table } from "../../components/table/tableDocument";
import { Button } from 'antd';
import { useRouter } from "next/router";

export default function Admin() {
    const router = useRouter();
    return (
        <>
            <div className="flex flex-row-reverse pb-4">
                <div>
                    <Button type="primary" onClick={() => router.push('/createDocument')} block>
                        Thêm hồ sơ
                    </Button>
                </div>
            </div>
            <Table />
        </>
    );
}

Admin.Layout = AdminLayout;