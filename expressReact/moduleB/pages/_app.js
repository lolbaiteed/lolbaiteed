import DefaultLayout from './components/layout';
import AdminLayout from './components/adminLayout';
import AuthLayout from './components/authLayout';
import './styles/style.css'

const layouts = {
    default: DefaultLayout,
    admin: AdminLayout,
    auth: AuthLayout
};

function Wrapper({ Component, pageProps }) {
    const getLayout = Component.getLayout || ((page)=> page);
    return getLayout(<Component {...pageProps}/>)
}

export default Wrapper;