import { navlink } from "../constants";
import { ic_humburger, logo } from "../images";
const Nav = () => {
  return (
    <header className="bg-black padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center">
        <a href="/" className="">
          <img src={logo} alt="logo" width={150} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navlink.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="text-white">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
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
