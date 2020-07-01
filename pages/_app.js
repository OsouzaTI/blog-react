import './globalStyles.css'
import 'react-calendar/dist/Calendar.css';
import MenuComponent from '../src/components/header/Menu'
import {
    Grid
} from '../src/components/styles'

function MyApp({ Component, pageProps }) {
    return (
        <Grid>
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
  