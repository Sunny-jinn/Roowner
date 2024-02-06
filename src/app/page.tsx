import { Canvas } from "@react-three/fiber";
import styles from "./page.module.css";
import dynamic from "next/dynamic";
import Map from "@/components/Map";

export default function Home() {
  return (
    <main className={styles.main}>
      <Map />
    </main>
  );
}
