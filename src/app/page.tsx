import { Canvas } from "@react-three/fiber";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import Hello from "@/components/Hello";

export default function Home() {
  return (
    <main className={styles.main}>
      <Hello />
    </main>
  );
}
