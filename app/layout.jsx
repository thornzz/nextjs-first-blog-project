import {Inter} from "@next/font/google";
import styles from "./styles.module.css";
import "../styles/global.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const interFont = Inter();

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={interFont.className}>
      <body className={styles.container}>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
      </body>
    </html>
  )
}
