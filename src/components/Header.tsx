import NavBar from "./NavBar";
import "./Header.css";
import { base } from "../utility.tsx";

const Header = () => {
  return (
    <header className="Header-container">
      <h1 className="Header-title lato-bold">
        <img src={`${base}title.png`} width={40} height={40}></img>
        <span style={{ color: "#535860", textShadow: "0px 0px 2px #595959ff" }}>
          BIO
        </span>
        <span style={{ color: "#3E98BF", textShadow: "0px 0px 2px #595959ff" }}>
          SIM
        </span>
      </h1>
      <NavBar />
    </header>
  );
};

export default Header;
