import Head from 'next/head';
import { Inter } from '@next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>React table</title>
      </Head>
      <h1>React Table</h1>
      <Link href='/selecting_rows'>React Table-Select Rows</Link>
    </>
  );
}
