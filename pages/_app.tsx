import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charSet="utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="description" content="Jakarea Parvez - Responsive Personal portfolio"/>
        <meta name="keywords" content="Jakarea Parvez, resume, cv, portfolio, personal, developer, web, laravel"/>
        <meta name="author" content="Jakarea"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <title>Jakarea Parvez - Personal Portfolio</title>
        <base href="https://jakarea.github.io/"></base>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico"/>
        <link href="https://fonts.googleapis.com/css2?family=Lora&display=swap" rel="stylesheet"/>
        <link href="static/plugin/bootstrap/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="static/plugin/font-awesome/css/font-awesome.min.css" rel="stylesheet"/>
        <link href="static/css/style.css" rel="stylesheet"/>
        <link href="static/css/color/default.css" rel="stylesheet"/>
        <link href="static/css/added.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
