import { Pagination } from 'antd';
import AppContext from '../../components/AppContext';
import { Fragment, useContext } from 'react';
import moment from 'moment';

export const Table = () => {
  const { state, dispatch } = useContext(AppContext);
  const { documentsList } = state;
  return (
    <>
      <div className="overflow-x-auto rounded-lg border border-gray-200 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="bg-gray-100 left-0 insert-y-0 sticky swhitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Số TT</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Xã/phường</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Tên</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Nội dung</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Ngày nhận</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Số điện thoại</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Số tờ/thửa</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Diện tích hiện trạng</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Số phát hành GCN</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Xử lý chính</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Xử lý nội nghiệp</th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Ngày đo</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Ngày trình thẩm định</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Ngày thẩm định</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Cán bộ thẩm định</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Trạng thái</div>
              </th>
              <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                <div className="flex items-center gap-2">Ghi chú</div>
              </th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {documentsList?.map((document, index) => {
              return (
                <Fragment key={document._id}>
                  <tr>
                    <td className="sticky inset-y-0 left-0 bg-white px-4 py-2">{(index += 1)}</td>
                    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{document.ward}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{document.document_name}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{document.content}</td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                      {moment(document.received_date).format('DD/MM/YYYY')}
                    </td>
                    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{document.phone_number}</td>
                    <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">{document.page_number}</td>
                    <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">{document.current_area}</td>
                    <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                      {document.number_certificate}
                    </td>
                    <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">{document.main_person}</td>
                    <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">{document.sub_person}</td>
                    <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                      {moment(document.measure_date).format('DD/MM/YYYY')}
                    </td>
                    <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                      {moment(document.submission_date).format('DD/MM/YYYY')}
                    </td>
                    <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                      {moment(document.appraisal_date).format('DD/MM/YYYY')}
                    </td>
                    <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">{document.appraiser}</td>
                    <td className="whitespace-nowrap px-4 py-2">
                      <strong className="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700">
                        {document.status}
                      </strong>
                    </td>
                    <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">Không</td>
                  </tr>
                </Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center mt-2">
        <Pagination defaultCurrent={1} total={50} />
      </div>
    </>
  );
};
