import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import hammerMenu from '../public/hammerMenu.png'
import Collapse from "@mui/material/Collapse";


const Menu = () => {
  return (
    <Navbar>
      <NavItem text="Accueil" link="../#home"/>
      <NavItem text="Projets" link="../#projects"/>
      <NavItem text="Articles" link="../#articles"/>
      <NavItem text="Contact" link="../#contact"/>
    </Navbar>
  )
}

export default Menu

function Navbar(props) {
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = useState(false)

  const handleChange = () => {
    setChecked((prev) => !prev);
    setOpen(!open);
  };

  return (
    <nav className={`flex flex-row items-center ${checked ?"gap-x-5" : ""} h-12 bg-washed-white/25 rounded-xl px-3`}>
      <div className={`${checked ? "-scale-x-100 hover:-scale-x-110 hover:scale-y-110" : "scale-x-100 hover:scale-110"} flex items-center cursor-pointer transition-{brightness} duration-200 hover:brightness-125`}>
        <Image
          src={hammerMenu}
          height="39"
          width="32"
          onClick={handleChange}
        />
      </div>
      <Collapse orientation="horizontal" in={checked}>
        <ul className={`flex flex-col md:flex-row justify-center md:items-center md:gap-x-5`}>
          {props.children}
        </ul>
      </Collapse>
    </nav>
  )
}

function NavItem(props) {
  return (
    <li>
      <Link href={props.link}>
        <a className={`text-2xl transition-{brightness} duration-200 hover:brightness-125`}>
          {props.text}
        </a>
      </Link>
    </li>
  )
}