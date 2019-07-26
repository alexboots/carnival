import Link from "next/link";
import Header from "../components/header";

function Index() {
  return (
    <main>
      <Header />
      <section>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
         add this: https://github.com/isaachinman/next-i18next/tree/master/examples/simple
      </section>
    </main>
  );
}

export default Index;
