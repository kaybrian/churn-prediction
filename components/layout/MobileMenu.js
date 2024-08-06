'use client'
import Link from "next/link";
import { useState } from "react";

const MobileMenu = ({ isSidebar, handleMobileMenu }) => {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };
    return (
        <>


    {/*Start Mobile Menu  */}
    <div className="mobile-menu">
        <nav className="menu-box">
            <div className="close-btn" onClick={handleMobileMenu}>
                <i className="fas fa-times"></i>
            </div>
            <div className="nav-logo">
                <Link href="/">
                    <img src="assets/img/resource/logo-3.png" alt="Logo"/>
                </Link>
            </div>
            <div className="menu-outer">
            <ul className="navigation">
                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>

                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                </li>
                <li><Link href="/about/">About</Link></li>
                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">Services</Link>

                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                </li>
                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">Pages</Link>

                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                </li>
                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/#">Blog</Link>

                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                </li>
                <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    </div>
    <div className="menu-backdrop" onClick={handleMobileMenu}></div>
    {/* End Mobile Menu */}




    </>
    )
}
export default MobileMenu;
