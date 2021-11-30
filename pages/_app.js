import React, {useEffect, useState} from "react";
import {Layout} from "../components";
import "tailwindcss/tailwind.css";
import "../styles/global.scss";
import Router from "next/router";
import {Loader} from "../components";
import nProgress from "nprogress";
nProgress.configure({showSpinner: false});

import Head from "next/head";

function MyApp({Component, pageProps}) {
  const [loading, setLoading] = useState(false);
  Router.events.on("routeChangeStart", (url) => {
    nProgress.start();

    setLoading(true);
  });
  Router.events.on("routeChangeComplete", (url) => {
    nProgress.done();
    setLoading(false);
  });

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
          integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
      </Head>
      {loading && <Loader />}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
