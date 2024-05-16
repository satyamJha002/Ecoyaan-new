import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navigation = () => {
  const [nav, setNav] = React.useState(false);
  const [color, setColor] = React.useState(false);

  const handleScroll = () => {
    if (window.scrollY <= 0) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const handleNav = () => {
    setNav(!nav);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 4,
      text: "Careers",
    },
  ];
  return (
    <>
      <div
        className={`${
          color ? `bg-black text-white` : `bg-[#00df9a] text-black`
        } flex w-[100%] justify-between items-center h-20 p-4 text-white fixed`}
      >
        {/* Logo */}
        <NavLink to="/">
          <h2
            className={`text-3xl font-bold ${
              color ? `text-[#00df9a]` : `text-black`
            }  transition-all duration-300 hover:scale-110  cursor-pointer `}
          >
            Ecoyaan
          </h2>
        </NavLink>

        {/*Desktop Navigation */}
        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`p-4 ${
                color ? "hover:bg-[#00df9a]" : "hover:bg-black hover:text-white"
              }  rounded-xl m-2 cursor-pointer duration-300  transition-all  hover:scale-110`}
            >
              <NavLink
                to={item.text === "Home" ? "/" : `/${item.text}`}
                className="navLink"
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Navigation Icon */}
        <div onClick={handleNav} className="block md:hidden cursor-pointer">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/* Mobile Navigation Menu */}
        <ul
          className={
            nav
              ? `fixed md:hidden left-0 top-0 w-[60%] h-full border-r-gray-900 ${
                  color ? `bg-[#000300]` : "bg-[#00df9a]"
                }  ease-in-out duration-500`
              : "ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]"
          }
        >
          {/* Mobile logo */}
          <h2
            className={`w-full text-3xl font-bold ${
              color ? "text-[#00df9a]" : "text-black"
            }  m-4`}
          >
            Ecoyaan
          </h2>

          {navItems.map((item) => (
            <li
              key={item.id}
              className={`p-4 border-b rounded-xl ${
                color
                  ? "hover:bg-[#00df9a]"
                  : "hover:bg-black hover:text-white "
              }  cursor-pointer border-gray-600 text-white transition-all duration-300 hover:scale-110`}
            >
              <NavLink
                to={item.text === "Home" ? "/" : `/${item.text}`}
                className="navLink"
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navigation;
