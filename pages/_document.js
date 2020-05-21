import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render() {
    return (
      <html lang="bn">
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
          <link
        href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap.css"
        rel="stylesheet"
      />


        </Head>
        <body className="custom_class">
          {this.props.customValue}
          <Main />
          <NextScript />
        </body>
        <script src="/next-deploy/js/jquery.js"></script>
        <script src="/next-deploy/plugin/bootstrap/js/popper.min-1.12.3.js"></script>        
        <script src="/next-deploy/plugin/bootstrap/js/bootstrap.min.js"></script>
        <script src="/next-deploy/plugin/parallax/parallax.min.js"></script>
        <script src="/next-deploy/js/jquery.nav.js"></script>
        <script src="/next-deploy/js/custom.js"></script>
      </html>
    )
  }
}