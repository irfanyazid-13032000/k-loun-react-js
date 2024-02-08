import cursor from '../../public/img/control.png'
import logo from '../../public/img/logo-k-loun-biru.png'
import chartfill from '../../public/img/Chart_fill.png'
import setting from '../../public/img/Setting.png'
import user from '../../public/img/User.png'
import kloun from '../../public/img/k-loun-favicon-biru.png'
import { Link,Outlet } from 'react-router-dom';


import { useState } from 'react'
export default function Sidebar() {
  const [open,setOpen] = useState(true)
  const Menus = [
    {title:"Dashboard",src:chartfill,link:'/dashboard'},
    {title:"Setting",src:setting,link:'/setting'},
    {title:"Admin",src:user,gap:true,link:'/admin'},
    {title:"Order",src:kloun,link:'/order'},
  ]
  return (
    <div className="flex">
      <div className={` ${open ? 'w-72' : 'w-20'} duration-300 h-screen p-5 pt-8 bg-dark-purple relative`}>
        <img src={cursor} className={`absolute cursor-pointer rounded-full -right-3 top-9 w-7 border-2 border-dark-purple ${!open && "rotate-180"}`} onClick={()=>{setOpen(!open)}}/>
        <div className='flex gap-x-4 items-center'>
          <img src={logo} className={`cursor-pointer duration-500 ${open && "rotate-[720deg]"}`}/>
        </div>
        <ul className='pt-6'>
          {Menus.map((menu,index)=>(
              <Link to={menu.link} key={index}>
                <li  className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md ${menu.gap ? "mt-9" : "mt-2"}`}>
                    <img src={menu.src} alt="" />
                    <span className={`${!open && "hidden"} origin-left duration-200`}>{menu.title}</span>
                </li>
              </Link>
          ))}
        </ul>
      </div>
      <Outlet/>
      
    </div>
  )
}
