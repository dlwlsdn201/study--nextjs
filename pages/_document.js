import Document, { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* // 여기에 폰트 임포팅 */}
          {/* // 여기에 공통 CSS e.g.reset-css/common.css */}
        </Head>
        <body>
          <div id="root">
            <Main />
            <NextScript />
          </div>
        </body>
      </Html>
    );
  }
}
