import '../app/globals.css';
import React from 'react';
import type { AppProps } from 'next/app'
 
export default function MyApp({ Component, pageProps }: AppProps) {
  // @ts-ignore
  return <Component {...pageProps} />
}