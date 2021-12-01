import Document, { Html, Head, Main, NextScript } from 'next/document'

import { GA_TRACKING_ID } from '../utils/gtag'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
          { /* <script
            dangerouslySetInnerHTML={{
              __html: `
              (function (w,d,s,o,f,js,fjs) {
                  w['JS-Widget']=o;w[o] = w[o] || function () { (w[o].q = w[o].q || []).push(arguments) };
                  js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
                  js.id = o; js.src = f; js.async = 1; fjs.parentNode.insertBefore(js, fjs);
              }(window, document, 'script', 'mw', 'http://localhost:8080/widget.js'));
              `
            }}
          /> */}

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
