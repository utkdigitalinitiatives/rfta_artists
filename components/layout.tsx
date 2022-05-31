import React from "react";
import Head from "next/head";
import Header from "@/components/Header/Header";

export const siteTitle = "Next.js Sample Website";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <script crossOrigin src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
        <script crossOrigin src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
        <script async src="https://www.lib.utk.edu/assets/universal-header.js"></script>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header id="utk-lib-header"></header>
      <Header />
      <main>{children}</main>
      <footer id="utk-lib-footer"></footer>
    </>
  );
}
