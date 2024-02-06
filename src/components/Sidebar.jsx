import cursor from '../../public/img/control.png'
import logo from '../../public/img/logo-k-loun-biru.png'
import chartfill from '../../public/img/Chart_fill.png'
import setting from '../../public/img/Setting.png'
import user from '../../public/img/User.png'

import { useState } from 'react'
export default function Sidebar() {
  const [open,setOpen] = useState(true)
  const Menus = [
    {title:"Dashboard",src:chartfill},
    {title:"Setting",src:setting},
    {title:"Account",src:user,gap:true},
  ]
  return (
    <div className="flex">
      <div className={` ${open ? 'w-72' : 'w-20'} duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}>
        <img src={cursor} className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${!open && "rotate-180"}`} onClick={()=>{setOpen(!open)}}/>
        <div className='flex gap-x-4 items-center'>
          <img src={logo} className={`cursor-pointer duration-500 ${open && "rotate-[720deg]"}`}/>
          <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && "hidden"} `}>KLOUN</h1>
        </div>
        <ul className='pt-6'>
          {Menus.map((menu,index)=>(
            <li key={index} className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}>
              <img src={menu.src} alt="" />
              <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold">
        <h1>homePage</h1>
      </div>
    </div>
  )
}
