import BrandLogo from "../assets/images/logo.svg";
import Toggle from "../assets/images/icon-hamburger.svg";
import Close from "../assets/images/icon-close-menu.svg";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="min-h-80 bg-[url('../../src/assets/images/image-hero-mobile.jpg')] lg:bg-[url('../../src/assets/images/image-hero-desktop.jpg')] bg-center bg-cover bg-no-repeat">
      <nav className="px-4 relative container py-10 mx-auto flex items-center justify-between">
        <a href="#">
          <img src={BrandLogo} alt="brand logo" />
        </a>
        <button className="lg:hidden" onClick={handleToggle}>
          {showMenu ? (
            <img src={Close} alt="close icon" />
          ) : (
            <img src={Toggle} alt="toggle icon" />
          )}
        </button>
        {showMenu && (
          <ul className="lg:hidden absolute w-[90%] font-bold text-xl bg-neutral-white text-neutral-black space-y-4 top-20 p-5 rounded z-10">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Get Started</a>
            </li>
          </ul>
        )}
        <ul className="hidden lg:flex items-center justify-between w-2/6 text-neutral-white">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Discover</a>
          </li>
          <li>
            <a href="#">Get Started</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
