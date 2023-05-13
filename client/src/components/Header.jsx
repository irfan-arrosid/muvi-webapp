import React, { useState } from 'react';
import logo from './../assets/images/disney-hotstar-logo-dark.svg';
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from "react-icons/hi2";
import HeaderItem from './HeaderItem';

function Header() {
  const [toggle, setToggle] = useState(false);
  const menu = [
    {
      name: 'HOME',
      icon: HiHome
    },
    {
      name: 'SEARCH',
      icon: HiMagnifyingGlass
    },
    {
      name: 'WATCH LIST',
      icon: HiPlus
    },
    {
      name: 'ORIGINALS',
      icon: HiStar
    },
    {
      name: 'MOVIES',
      icon: HiPlayCircle
    },
    {
      name: 'SERIES',
      icon: HiTv
    }
  ]

  return (
    <div className='flex items-center justify-between mt-3 px-12'>
      <div className='flex gap-12 items-center'>
        <img src={logo} className='w-[80px] md:w-[115px] pb-2.5 object-cover' />
        <div className='hidden md:flex gap-12'>
        {menu.map((item) => (
          <HeaderItem name={item.name} Icon={item.icon} />
        ))}
        </div>
        <div className='md:hidden flex gap-8'>
          {menu.map((item, index) => index<3&& (
          <HeaderItem name={''} Icon={item.icon} />
          ))}
          <div className='md:hidden' onClick={() => setToggle(!toggle)}>
            <HeaderItem name={''} Icon={HiDotsVertical} />
            {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] border-gray-700 p-3 px-5 py-4 rounded-md'>
              {menu.map((item, index) => index>2&& (
              <HeaderItem name={item.name} Icon={item.icon} />
              ))}
            </div>:null}
          </div>
        </div>
      </div>
      <img src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745" className='w-[40px] rounded-full' />
    </div>
  )
}

export default Header