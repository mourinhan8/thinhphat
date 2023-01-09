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
                                    Xã/phường
                                </div>
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div className="flex items-center gap-2">
                                    Tên
                                </div>
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div className="flex items-center gap-2">
                                    Nội dung
                                </div>
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div className="flex items-center gap-2">
                                    Ngày nhận
                                </div>
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div className="flex items-center gap-2">
                                    Số điện thoại
                                </div>
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div className="flex items-center gap-2">
                                    Số tờ/thửa
                                </div>
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div className="flex items-center gap-2">
                                    Diện tích hiện trạng
                                </div>
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div className="flex items-center gap-2">
                                    Số phát hành GCN
                                </div>
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div className="flex items-center gap-2">
                                    Xử lý chính
                                </div>
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                Xử lý nội nghiệp
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div className="flex items-center gap-2">
                                    Ngày đo
                                </div>
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div className="flex items-center gap-2">
                                    Ngày trình thẩm định
                                </div>
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div className="flex items-center gap-2">
                                    Ngày thẩm định
                                </div>
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div className="flex items-center gap-2">
                                    Cán bộ thẩm định
                                </div>
                            </th>
                            <th
                                className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"
                            >
                                <div className="flex items-center gap-2">
                                    Ghi chú
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
                            <td className="whitespace-nowrap px-4 py-2">
                                <strong
                                    className="rounded bg-red-100 px-3 py-1.5 text-xs font-medium text-red-700"
                                >
                                    Cancelled
                                </strong>
                            </td>
                            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                                1
                            </td>
                            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                                100m2
                            </td>
                            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                                TCDTT
                            </td>
                            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                                Lê Văn Mến
                            </td>
                            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                                Mến Lê
                            </td>
                            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                                20/11/2021
                            </td>
                            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                                10/10/2022
                            </td>
                            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                                10/10/2022
                            </td>
                            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                                Nguyễn Quang Huy
                            </td>
                            <td className="whitespace-nowrap text-center px-4 py-2 text-gray-700">
                                Không
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    );
};