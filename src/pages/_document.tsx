import { Html, Head, Main, NextScript } from 'next/document'
import age from '@/utils/age'

const metadata = {
  title: 'Jakub <3',
  description: `$yo :3`,
}

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name='title' content={metadata.title} />
        <meta name='og:title' content={metadata.title} />
        <meta name='description' content={metadata.description} />
        <meta name='og:description' content={metadata.description} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
