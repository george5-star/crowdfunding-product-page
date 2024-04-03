import BrandLogo from "../assets/images/logo.svg";
import Toggle from "../assets/images/icon-hamburger.svg";
import { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggle = () => {
    setShowMenu(!showMenu);
    console.log("toggle clicked");
  };
  return (
    <div className="min-h-80 bg-[url('../../src/assets/images/image-hero-mobile.jpg')] lg:bg-[url('../../src/assets/images/image-hero-desktop.jpg')] bg-center bg-cover bg-no-repeat">
      <nav className="container py-10 mx-auto flex items-center justify-between">
        <img src={BrandLogo} alt="brand logo" />
        <button className="lg:hidden" onClick={handleToggle}>
          <img src={Toggle} alt="toggle" />
        </button>
        {showMenu && (
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
