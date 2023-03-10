import { ThemeProvider } from "next-themes";
import Script from "next/script";
import "../css/tailwind.css";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Script
        id="Adsense-id"
        data-ad-client="ca-pub-5000031567742123"
        async="true"
        strategy="beforeInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        onError={ (e) => { console.error('Script failed to load', e) }}
        onLoad={() => console.log('load')}
      /> */}
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
