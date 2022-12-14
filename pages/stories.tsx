import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/layout/layout";
import StoriesModule from "../components/modules/storiesModule";

const Stories: NextPage = () => {
  return (
    <>
      <Head>
        <title>Photosnap - Stories</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <StoriesModule />
    </>
  );
};

export default Stories;
