import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import { Outlet } from "react-router-dom";

const Nav = () => {
  const [click, setClick] = useState(false);
  const HandleClick = () => setClick(!click);
  const content = (
    <>
      <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
        <ul className="text-center text-xl p-20 ">
          <Link spy={true} smooth={true} to="/">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Home
            </li>
          </Link>
          
          
          <Link  spy={true} smooth={true} to="/project">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
              Projects
            </li>
          </Link>
          
        </ul>
      </div>
    </>
  );
  return (
    <>
    <nav>
      <div className="bg-slate-900 h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 flex-1">
        <div className="flex item-center flex-1">
          <span className="text-3xl font-bold">Razz</span>
        </div>
        <div className="lg:flex md:flex lg: flex-1 items center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="/">
                <li className="hover:text-fuchsia-500 transition border-b-2  border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Home
                </li>
              </Link>
              
              
              <Link spy={true} smooth={true} to="/project">
                <li className="hover:text-fuchsia-500 transition border-b-2  border-slate-900 hover:border-fuchsia-600 cursor-pointer">
                  Projects
                </li>
              </Link>
              
            </ul>
          </div>
        </div>
        <div>{click && content}</div>

        <button className="block sm:hidden transtion" onClick={HandleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
    <Outlet/>
    </>
  );
};

export default Nav;
