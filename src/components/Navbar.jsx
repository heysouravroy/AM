import logo from "../assets/logoAM.png";
import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/antaramudi/" target="_blank"><FaLinkedin /></a>
        <a href="https://github.com/Antara2002" target="_blank"><FaGithub /></a>
        <a href="https://www.instagram.com/a.n.t.a.r.a___/" target="_blank"><FaInstagram /></a>
        <a href="https://www.facebook.com/antaramudi2002/" target="_blank"><FaFacebook /></a>
      </div>
    </nav>
  );
};

export default Navbar;
