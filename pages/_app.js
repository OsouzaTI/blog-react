import './globalStyles.css'
import 'react-calendar/dist/Calendar.css';
import 'suneditor/dist/css/suneditor.min.css';// Import Sun Editor's CSS File 
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid } from '../src/components/styles'
import MenuComponent from '../src/components/header/Menu'
import LoadingScreen from '../src/components/LoadingScreen'
import Head from 'next/head'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import React from 'react'
import { store, persistor } from '../src/store/storeConfig'


function MyApp({ Component, pageProps }) {
    return (
        <>{!pageProps ? <LoadingScreen />
            :
            <Grid>
                <Head>
                    <title>algorithms</title>
                    <meta name={"viewport"} content={"initial-scale=1.0, width=device-width"} />
                    <link rel={"shortcut icon"} href={"/favicon2.png"} />
                </Head>
                <MenuComponent />
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <Component {...pageProps} />                
                    </PersistGate>
                </Provider>
            </Grid>
        }
        </>
    )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  
  export default MyApp
  