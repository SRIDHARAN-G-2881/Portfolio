import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'
export default function Header() {
    const [toggleMenu, setToggleMenu]=useState(false);
    return(
        <header className="flex justify-between bg-primary px-5 py-3 bg">
            <a href="5" className="font-bold border-4 text-black px-2">SRIDHARAN G</a>
            <nav className="hidden md:block">
            <ul className="flex text-white">
                <li className="px-5 hover:border-4"><a href="4">HOME</a></li>
                <li className="px-2 hover:border-4"><a href="#about">ABOUT</a></li>
                <li className="px-2 hover:border-4"><a href="#project">PROJECTS</a></li>
                <li className="px-2 hover:border-4"><a href="#resume">RESUME</a></li>
                <li className="px-2 hover:border-4"><a href="https://www.linkedin.com/in/sridharan-g-411943267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LINKEDIN</a></li>
                <li className="px-2 hover:border-4"><a href="https://github.com/SRIDHARAN-G-2881">GIT HUB</a></li>
            </ul>
            </nav>
            {toggleMenu && <nav className="block md:hidden ">
            <ul onClick={()=>{ setToggleMenu(!toggleMenu)

            }}className="flex flex-col text-white mobile-nav ">
                <li className="px-2"><a href="4">HOME</a></li>
                <li className="px-2"><a href="#about">ABOUT</a></li>
                <li className="px-2"><a href="#project">PROJECTS</a></li>
                <li className="px-2"><a href="#resume">RESUME</a></li>
                <li className="px-2"><a href="https://www.linkedin.com/in/sridharan-g-411943267?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">LINKEDIN</a></li>
                <li className="px-2"><a href="https://github.com/SRIDHARAN-G-2881">GIT HUB</a></li>
            </ul>
            </nav>}
            <button onClick={()=>setToggleMenu(!toggleMenu)} className="block md:hidden"><Bars3Icon className='text-white h-5'/></button>
            
        </header>
    )
}