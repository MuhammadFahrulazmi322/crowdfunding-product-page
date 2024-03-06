import { navlink } from "../constants";
import { ic_humburger, logo } from "../assets/images";
const Nav = () => {
  return (
    <header className="p-8 lg:px-48 lg:py-14 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/" >
          <img src={logo} alt="logo" width={100} />
        </a>
        <ul className="flex-1 flex justify-end items-center gap-6 max-lg:hidden">
          {navlink.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-white text-sm">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            src={ic_humburger}
            alt="humburger"
            width={24}
            className=""
            // onClick={() =>
            //   document.querySelector("ul").classList.toggle("hidden")
            // }
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
