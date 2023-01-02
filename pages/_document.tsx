import { Head, Html, Main, NextScript } from "next/document";

import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <Main />
                <NextScript />
                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
      `}
                </Script>
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
          window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
          ga('create', '${process.env.NEXT_PUBLIC_GUA_ID}', 'auto');
          ga('send', 'pageview');
        `}
                </Script>
                <Script
                    src="https://www.google-analytics.com/analytics.js"
                    strategy="afterInteractive"
                />
            </body>
        </Html>
    );
}
