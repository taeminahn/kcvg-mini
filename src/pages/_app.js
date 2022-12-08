import React from "react";
import '../styles/globals.css'
import PropTypes from "prop-types";
import NavBar from "../components/NavBar";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import wrapper from '../store/configureStore'

const MyApp = ({Component}) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <link rel="icon" href="/favicon.png"/>
        <title>KCVG 통합 미니프로젝트</title>
      </Head>
      <NavBar/>
      <div className={`${styles.container}`}>
        <div className="max-w-screen-2xl mx-auto h-full">
          <Component/>
        </div>
      </div>
    </>
  );
};

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(MyApp);
