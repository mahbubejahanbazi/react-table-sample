import Head from 'next/head';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>React table</title>
      </Head>
      <h1>React Table</h1>
    </>
  );
}
