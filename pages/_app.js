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
import React, { useState, useEffect } from 'react'
import { store, persistor } from '../src/store/storeConfig'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
    const router = useRouter();    
    const [loading, setLoading] = useState(false);    
    useEffect(() => {
        const handleStart = (url) => (url !== router.pathname) && setLoading(true);
        // handleComplete event was not firing
        const handleComplete = (url) => (url === router.pathname) && setLoading(false);

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleComplete)
        router.events.on('routeChangeError', handleComplete)
        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleComplete)
            router.events.off('routeChangeError', handleComplete)
        }
    })
    return (
        <>{loading ? <LoadingScreen />
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
  