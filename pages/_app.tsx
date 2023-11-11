import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import { Inter } from 'next/font/google'
import styles from '@/styles/App.module.css';
import NextNProgress from "nextjs-progressbar";

const inter = Inter({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Head>
        <title key='title'>Politer AI: Make your messages nicer</title>
        <meta name='description' content='Politer AI is a GPT-3 powered tool created by Software Engineer Dmytro Turskyi, that helps you write more polite and friendly messages. Just type your message and click the button to see the magic.' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress />
      <Container className={styles.pageContainer}>
        <Component {...pageProps} />
      </Container>
    </div>
  );
}
