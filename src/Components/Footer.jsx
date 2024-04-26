import { FaFacebook, FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="lg:px-10 md:px-10 bg-base-200 md:pt-20 px-0 ">
            <footer className="footer text-base-content">
  <aside>
    <Link className="font-extrabold text-2xl" to='/' > JOURNEY </Link>
    <p>ACME Industries Ltd.<br/>And Providing reliable tech since 1992</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
{/* Footer Bottom */}
<footer className="footer justify-between p-10 text-base-content">
  <aside>
    <p className="font-bold">
      ACME Industries Ltd. <br/>Providing reliable tech since 1992
    </p> 
  </aside> 
    <p>Copyright © 2024 - All right reserved</p>
  <nav>
    <div className="grid grid-flow-col gap-4">
      <Link><FaGithub className="text-2xl" > </FaGithub>  </Link>
      <Link><FaLinkedin className="text-2xl" > </FaLinkedin>  </Link>
      <Link> <FaYoutube className="text-2xl" ></FaYoutube> </Link>
      <Link> <FaFacebook className="text-2xl" ></FaFacebook> </Link>
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;