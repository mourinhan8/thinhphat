import AdminLayout from '../../layouts/Admin';
import { Table } from '../../components/table/tableDocument';
import { Button } from 'antd';
import { useRouter } from 'next/router';
import AppContext from '../../components/AppContext';
import { useCallback, useContext } from 'react';
import axios from 'axios';
import { useEffect } from 'react';

const backend_api = process.env.NEXT_PUBLIC_API_BACKEND;

export default function Admin() {
  const { state, dispatch } = useContext(AppContext);
  const getAllDocument = useCallback(async () => {
    try {
      const option = {
        method: 'get',
        url: `${backend_api}/document/list`,
      };
      const response = await axios(option);
      const documents = response.data.data;
      dispatch({ type: 'GET_ALL_DOCUMENTS', payload: documents });
    } catch (error) {
      console.log(error);
    }
  }, []);
  useEffect(() => {
    getAllDocument();
  }, [getAllDocument]);
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
