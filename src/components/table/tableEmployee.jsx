import { Pagination } from 'antd';

export const Table = () => {
    return (
        <>
            <div className="overflow-x-auto rounded-lg border border-gray-200 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 text-sm">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="bg-gray-100 left-0 insert-y-0 sticky swhitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                                <div className="flex items-center gap-2">
                                    Số TT
                                </div>
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div className="flex items-center gap-2">
                                    Họ và tên
                                </div>
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div className="flex items-center gap-2">
                                    Chức vụ
                                </div>
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div className="flex items-center gap-2">
                                    Nhiệm vụ
                                </div>
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div className="flex items-center gap-2">
                                    Văn phòng
                                </div>
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div className="flex items-center gap-2">
                                    Số điện thoại
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="sticky inset-y-0 left-0 bg-white px-4 py-2">
                                #1
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                                #00001
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                                John Frusciante
                            </td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">john@rhcp.com</td>
                            <td className="whitespace-nowrap px-4 py-2 text-gray-700">$783.23</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className='flex justify-center mt-2'>
                <Pagination defaultCurrent={1} total={50} />
            </div>
        </>
    );
};