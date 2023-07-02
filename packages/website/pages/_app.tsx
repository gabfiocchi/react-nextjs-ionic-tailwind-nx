import '@ui-configs/theme/global.scss';
import './styles.css';

import { store } from '@store/store/store.config';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';

import Script from 'next/script';


function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to website!</title>
      </Head>
      <main className="app">
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </main>
      <Script
        type="module"
        src="https://unpkg.com/ionicons@5.2.3/dist/ionicons/ionicons.esm.js"
      ></Script>
      <Script noModule src="https://unpkg.com/ionicons@5.2.3/dist/ionicons/ionicons.js"></Script>
    </>
  );
}

export default CustomApp;
