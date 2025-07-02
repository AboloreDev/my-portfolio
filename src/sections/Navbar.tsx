import { Link } from "react-router-dom";

import { useEffect, useState } from "react";

import { Menu } from "lucide-react";
import image2 from "../assets/portfolio.jpg";
import Container from "../components/Container";
import MobileMenu from "../components/MobileMenu";

const Navbar = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const isOpenMenu = () => setIsMobileMenu(true);
  const isCloseMenu = () => setIsMobileMenu(false);

  // Effect
  useEffect(() => {
    document.body.style.overflow = isMobileMenu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenu]);

  return (
    <section className=" w-full backdrop-blur-lg  text-white p-4">
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to={"/"}
            className="uppercase prata-regular transition-colors text-white flex items-center"
          >
            <img src={image2} alt="Portfolio logo" className="w-8 h-8" />
            <span className="text-white">Portfolio</span>
          </Link>

          {/* NavLinks */}
          <div className="hidden md:flex items-center space-x-4 uppercase prata-regular transition-colors text-neutral-400 hover:text-white">
            <a
              href="/"
              className=" transition-colors text-neutral-400 hover:text-white"
            >
              Home
            </a>
            <a
              href="#about"
              className=" transition-colors text-neutral-400 hover:text-white"
            >
              About
            </a>
            <a
              href="#contact"
              className=" transition-colors text-neutral-400 hover:text-white"
            >
              contact
            </a>
          </div>

          <button className="md:hidden" onClick={isOpenMenu}>
            <Menu className="h-6 w-6 cursor-pointer" />
          </button>
        </div>

        <MobileMenu isOpen={isMobileMenu} onClose={isCloseMenu} />
      </Container>
    </section>
  );
};

export default Navbar;
