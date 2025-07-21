import { ThemeModeScript } from 'flowbite-react';
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html suppressHydrationWarning>
            <Head>
                <ThemeModeScript />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}