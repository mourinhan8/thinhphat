import { useRouter } from 'next/router';
import { useEffect, useContext, useState } from 'react';
import AppContext from '../../components/AppContext';
import axios from 'axios';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    // redirect to home if already logged in
    const token = sessionStorage.getItem('access_token');
    const user = sessionStorage.getItem('user');
    if (token && user) {
      router.push('/');
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BACKEND}/employee/login`, {
        username,
        password,
      });
      sessionStorage.setItem('access_token', `Bearer ${response.headers.authorization}`);
      sessionStorage.setItem('user', response.data.user.username);
      router.push('/');
    } catch (error) {
      alert(error);
    }
  }

  return (
    <>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Trang quản lý hồ sơ</h1>
          <h2 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Công ty TNHH Thịnh Phát</h2>

          <form onSubmit={handleSubmit} className="mt-6 mb-0 space-y-4 rounded-lg p-8 shadow-2xl">
            <p className="text-lg font-medium text-center">Đăng nhập tài khoản để sử dụng</p>

            <div>
              <label htmlFor="username" className="text-sm font-medium">
                Tên đăng nhập
              </label>

              <div className="relative mt-1">
                <input
                  type="text"
                  id="username"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Tên đăng nhập"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="text-sm font-medium">
                Mật khẩu
              </label>

              <div className="relative mt-1">
                <input
                  type="password"
                  id="password"
                  className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
                  placeholder="Mật khẩu"
                  onChange={(e) => setPassword(e.target.value)}
                />

                <span className="absolute inset-y-0 right-4 inline-flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Đăng nhập
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
