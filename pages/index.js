import Head from "next/head";
import { useRouter } from "next/router";
import { Gallery } from "../src/Gallery";
import { Header } from "../src/Header";
import { pages } from "../src/pages";

export default function Home() {
  const router = useRouter();
  const page = pages[router.query.page || "home"];
  if (!page) {
    return (
      <div>
        <h1>Sorry, page not found</h1>
      </div>
    );
  }
  const Text = page.text;

  return (
    <div>
      <Head>
        <title>{page.title}</title>
      </Head>
      <Header />
      <Gallery pictures={page.pictures} />
      <Text />
    </div>
  );
}
