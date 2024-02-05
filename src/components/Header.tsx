import BrandLogo from "../assets/images/logo.svg";

const Header = () => {
  return (
    <div className="min-h-80 bg-[url('../../src/assets/images/image-hero-desktop.jpg')] bg-center bg-cover bg-no-repeat">
      <nav className="container py-10 mx-auto flex items-center justify-between">
        <img src={BrandLogo} alt="brand logo" />
        <ul className="flex items-center justify-between w-2/6 text-neutral-white">
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
