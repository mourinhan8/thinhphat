import '../styles/globals.css';
import 'antd/dist/reset.css';
import reducer from '../reducer/AppReducer';
import { useReducer, useEffect } from 'react';
import AppContext from '../components/AppContext';
import Head from 'next/head';
import React from 'react';
import { SessionProvider, useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const initialState = { user: null, documentsList: null };
  const Layout = Component.Layout || (({ children }) => <>{children}</>);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Thinh phat</title>
      </Head>
      <AppContext.Provider value={{ state, dispatch }}>
        <SessionProvider>
          {Component.auth ? (
            <Auth>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Auth>
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </SessionProvider>
      </AppContext.Provider>
    </React.Fragment>
  );
}
function Auth({ children }) {
  const router = useRouter();
  let isUser;
  if (typeof window !== 'undefined') {
    // do your stuff with sessionStorage
    const token = sessionStorage.getItem('access_token');
    isUser = token;
  }
  useEffect(() => {
    if (!isUser) router.push('/login');
  }, []);

  if (isUser) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
}
