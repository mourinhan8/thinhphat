import '../styles/globals.css';
import 'antd/dist/reset.css';
import { AppReducer } from '../reducer/AppReducer';
import { useReducer } from 'react';
import AppContext from '../components/AppContext';

export default function App({ Component, pageProps }) {
  const initialState = { user: null, documentsList: null };
  const Layout = Component.Layout || (({ children }) => <>{children}</>);
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppContext.Provider>
  );
}
