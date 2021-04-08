import Link from "next/link";
import navStyle from "./Navbar.module.css";

function NavBar(props) {
  const items = [
    { label: "INÍCIO", className: "", url: "/" },
    { label: "CONDOMÍNOS", className: "", url: "/condominios/" },
    { label: "EMPRESAS", className: "", url: "/empresas/" },
    { label: "QUEM SOMOS", className: navStyle.notMobile, url: "/quem-somos/" },
  ];

  return (
    <div className={navStyle.bar}>
      <img
        alt="logo"
        src="/logor-min.png"
        width="64"
        height="48"
        className="p-mr-2"
      />
      {items.map((item, i) => (
        <Link key={i} href={item.url}>
          <a className={item.className}>{item.label}</a>
        </Link>
      ))}
    </div>
  );
}

export default NavBar;
