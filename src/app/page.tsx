import Image from "next/image";
import styles from "./page.module.css";
import PageLayout from "./(pages)/layout";
import About from "./(pages)/about/page";

export default function Home() {
  return (
    <PageLayout>
      <About />
    </PageLayout>
  );
}
