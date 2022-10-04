import '../styles/globals.css'
import NavBar from "../components/NavBar";
import {useRouter} from "next/router";

function MyApp({ Component, pageProps }) {

  const { pathname } = useRouter();
  const authRoutes = ["/register", "/login"];
  const authRoute = authRoutes.includes(pathname);

  return <>
    <NavBar />
    <div className="bg-gray-200 min-h-screen">
    {/*<div className="bg-gray-200">*/}
    <Component {...pageProps} />
    </div>
  </>

}

export default MyApp
