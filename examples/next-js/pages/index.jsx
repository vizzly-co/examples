import Head from 'next/head'
import { Components, VizzlyGlobalStyles } from '@vizzly/components';
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head><title>Static Vizzly Studio examples</title></Head>
      <VizzlyGlobalStyles />
      <ul>
        <li>
          <Link href="/in-browser">
            <a>In browser</a>
          </Link>
        </li>
        <li>
          <Link href="/custom">
            <a>Custom query</a>
          </Link>
        </li>
        <li>
          <Link href="/self-hosted-docker-image">
            <a>Self-hosted docker image</a>
          </Link>
        </li>
      </ul>
    </>
  );
};
