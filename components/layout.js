import NavBar from "./Navbar.js";
import Hero from "./Hero.js";
import styles from "./layout.module.css";

const Layout = () => (
  <div className={styles.layout}>
    <Hero />
    <NavBar />
    <div>Início</div>
  </div>
);

export default Layout;
