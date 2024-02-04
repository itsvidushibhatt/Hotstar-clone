import React from "react";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./Headeritem";

function Header() {
  const [toggle, settoggle] = useState(false);
  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];
  return (
    <div className="flex items-center justify-between p-2">
      <div className="flex gap-8 text-center items-center">
        <img src={logo} alt="" className="w-[80px] md:w-[170px] object-cover" />
        <div className=" hidden md:flex gap-8">
          {menu.map((item) => (
            <HeaderItem key={item.name} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className=" md:hidden flex gap-8">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem key={item.name} name={""} Icon={item.icon} />
              )
          )}
        </div>
        <div className="md:hidden" onClick={() => settoggle((prev) => !prev)}>
          <HeaderItem name={""} Icon={HiDotsVertical} />
          {toggle ? (
            <div className='absolute mt-3 bg-[#121212] 
            border-[1px] border-gray-700 p-3 px-5 py-4'>
              {menu.map(
                (item, index) =>
                  index > 2 && (
                    <HeaderItem
                      key={item.name}
                      name={item.name}
                      Icon={item.icon}
                     />
                  )
              )}
            </div>
          ) : null}
        </div>
      </div>
      <img
        src="https://i.pinimg.com/736x/e5/8d/6c/e58d6cd867892026885641608e6da2b2.jpg"
        alt="error"
        className="rounded-full w-[40px] "
      />
    </div>
  );
}

export default Header;
