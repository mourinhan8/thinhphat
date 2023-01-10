import '../styles/globals.css';
import 'antd/dist/reset.css';
import { AppReducer } from '../reducer/AppReducer';
import { useReducer } from 'react';
import AppContext from '../components/AppContext';
import Head from "next/head";
import React from "react";

export default function App({ Component, pageProps }) {
  const initialState = { user: null, documentsList: null };
  const Layout = Component.Layout || (({ children }) => <>{children}</>);
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <React.Fragment>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Thinh phat</title>
      </Head>
      <AppContext.Provider value={{ state, dispatch }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AppContext.Provider>
    </React.Fragment>

  );
}
