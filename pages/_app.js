import './globalStyles.css'
import 'react-calendar/dist/Calendar.css';
import 'suneditor/dist/css/suneditor.min.css';// Import Sun Editor's CSS File 
import "bootstrap/dist/css/bootstrap.min.css";
import { Grid } from '../src/components/styles'
import MenuComponent from '../src/components/header/Menu'
import Head from 'next/head'
import React from 'react'
import { useRouter } from 'next/router'
<<<<<<< HEAD
const setTimerHours = hours => hours * 60 * 1000
function MyApp({ Component, pageProps }) {
    // setInterval(() => {
    //     console.log('limpando localStorage')
    //     localStorage.clear('categorys');
    // }, setTimerHours(1));
=======

function MyApp({ Component, pageProps }) {
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
    const router = useRouter();    
    return (
        <Grid>
            <Head>
                <title>Algorithms</title>
<<<<<<< HEAD
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
=======
                <meta name={"viewport"} content={"initial-scale=1.0, width=device-width"} />
>>>>>>> 009b74e0eb4534e2ae2dcd961d162dd6c716dde5
                <link rel={"shortcut icon"} href={"/favicon2.png"} />
            </Head>
            <MenuComponent />
            <Component {...pageProps} />                
        </Grid>
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
  