import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import hammerMenu from '../public/hammerMenu.png'


const Menu = () => {
  return (
    <Navbar>
      <NavItem text="Accueil" link="#home"/>
      <NavItem text="Projets" link="#projects"/>
      <NavItem text="Articles" link="#articles"/>
      <NavItem text="Contact" link="#contact"/>
    </Navbar>
  )
}

export default Menu

function Navbar(props) {
  const [open, setOpen] = useState(false)

  const toggle = () => {
    setOpen(!open);
  }

  return (
    <nav className="flex flex-row h-12 bg-washed-white/25 rounded-xl px-4">
      <ul className={` ${open ? "inline" : "hidden"} ml-3 flex flex-row items-center gap-x-5`}>
        {open && props.children}
      </ul>
      <div className={`${open ? "order-first -scale-x-100 hover:-scale-x-110 hover:scale-y-110" : "order-none scale-x-100 hover:scale-110"} flex items-center cursor-pointer transition-{brightness} duration-200 hover:brightness-125`}>
        <Image
          src={hammerMenu}
          height="39"
          width="32"
          onClick={toggle}
        />
      </div>
    </nav>
  )
}

function NavItem(props) {
  return (
    <li>
      <Link href={props.link}>
        <a className="text-2xl transition-{brightness} duration-200 hover:brightness-125">
          {props.text}
        </a>
      </Link>
    </li>
  )
}