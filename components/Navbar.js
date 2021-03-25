import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import navStyle from "./Navbar.module.css";
import { Menubar } from "primereact/menubar";

const NavBar = () => {
  const items = [
    { label: "Home" },
    { label: "Serviços" },
    { label: "Quem Somos" },
  ];
  const start = (
    <img alt="logo" src="logo.png" height="40" className="p-mr-2"></img>
  );

  return <Menubar  model={items} start={start} />;
};

export default NavBar;
