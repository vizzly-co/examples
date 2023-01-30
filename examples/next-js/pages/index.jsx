import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Static Vizzly Studio examples</title>
      </Head>
      <ul>
        <li>
          <Link href="/in-browser">
            <a>In browser</a>
          </Link>
        </li>
        <li>
          <Link href="/in-browser-basic">
            <a>In browser (basic)</a>
          </Link>
        </li>
        <li>
          <Link href="/custom">
            <a>Custom query</a>
          </Link>
        </li>
      </ul>
    </>
  );
}
