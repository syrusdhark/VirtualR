import {Menu,X} from "lucide-react"; 
import { useState } from "react";
import logo from "../assets/logo.png"
import {navItems} from "../constants";


function Navbar(){

    const [mobileOpenDrawer, setmobileOpenDrawer] = useState(false);

    const togglemobileOpenDrawer = () => {
        setmobileOpenDrawer(!mobileOpenDrawer);
    }

    return(
        <nav className="sticky top-0 z-50 py-3 flex  backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container  px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
           <div className="flex flex-shrink-0 items-center">
               <img src={logo} alt="Logo" className="w-10 h-10 mr-2"></img>
               <span>VirtualR</span>
           </div>

              <ul className="hidden flex lg:flex ml-14 space-x-12 text-sm">
                {navItems.map((items, index) => (
                    <li key={index}>
                         <a href={items.href}>{items.label}</a>

                    </li>
                ))}

              </ul>
              <div className="hidden lg:flex justify-center items-center space-x-12">
              <a href="#" className="py-2 px-3 border rounded-md">Sign in </a>
              <a href="#" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Create an account</a>
              </div>
               <div className="lg:hidden md:flex flex-col justify-end">
                 <button onClick={togglemobileOpenDrawer}>{mobileOpenDrawer ? <X /> : <Menu />}</button>
               </div>
              </div>

            {mobileOpenDrawer && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item,index) => (
                            <li key={index} className="py-4"><a href={item.href}>{item.label}</a></li>
                        ))}
                    </ul>
                <div className="flex flex-row space-x-4">
                    <button className="border rounded-md py-2 px-3">Sign in</button>
                    <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md">Create an account</button>
                </div>

                </div>
            )}

        </div>

        </nav>
    );

}


export default Navbar;