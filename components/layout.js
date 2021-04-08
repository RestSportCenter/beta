import dynamic from "next/dynamic";
import styles from "./layout.module.css";
const Head = dynamic(() => import("next/head"));
const NavBar = dynamic(() => import("./Navbar.js"));
const Whatsapp = dynamic(() => import("./Whatsapp.js"));
const Footpage = dynamic(() => import("./Footpage.js"));

const Layout = (props) => {
  return (
    <>
      <Head key="roboto">
        <link href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&family=Titillium+Web:wght@200&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.layout}>
        <Whatsapp />
        {props.hero}
        <NavBar pageName={props.pageName} />
        <div className={styles.children}>{props.children}</div>
        <Footpage />
      </div>
    </>
  );
};

export default Layout;
