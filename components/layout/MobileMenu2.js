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
                    <img src="assets/img/resource/logo-5.png" alt="Logo"/>
                </Link>
            </div>
            <div className="menu-outer">
            <ul className="navigation">
                <li className={isActive.key == 1 ? "dropdown current" : "dropdown"}><Link href="/">Home</Link>
                    <ul style={{ display: `${isActive.key == 1 ? "block" : "none"}` }}>
                        <li><Link href="/">Home One</Link></li>
                        <li><Link href="index-2">Home Two</Link></li>
                        <li><Link href="index-3">Home Three</Link></li> 
                    </ul>
                    <div className={isActive.key == 1 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(1)}><span className="fa fa-angle-right" /></div>
                </li>
                <li><Link href="/about/">About</Link></li>
                <li className={isActive.key == 2 ? "dropdown current" : "dropdown"}><Link href="/#">Services</Link>
                    <ul style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>                                 
                        <li><Link href="services">Services</Link></li>
                        <li><Link href="app-development">App Development</Link></li>
                        <li><Link href="uiux-design">Uiux Design</Link></li>
                        <li><Link href="web-development">Web Development</Link></li>
                        <li><Link href="digital-marketing">Digital Marketing</Link></li>
                        <li><Link href="corporate-agency">Corporate Agency</Link></li>
                    </ul>
                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(2)}><span className="fa fa-angle-right" /></div>
                </li>
                <li className={isActive.key == 3 ? "dropdown current" : "dropdown"}><Link href="/#">Pages</Link>
                    <ul style={{ display: `${isActive.key == 3 ? "block" : "none"}` }}>                                 
                        <li><Link href="testimonial">testimonial</Link></li>
                        <li><Link href="pricing">Pricing</Link></li>
                        <li><Link href="team">Team</Link></li>   
                    </ul>
                    <div className={isActive.key == 3 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(3)}><span className="fa fa-angle-right" /></div>
                </li>
                <li className={isActive.key == 4 ? "dropdown current" : "dropdown"}><Link href="/#">Blog</Link>
                    <ul style={{ display: `${isActive.key == 4 ? "block" : "none"}` }}>                                 
                        <li><Link href="blog">Blog</Link></li>
                        <li><Link href="blog-details">Blog Details</Link></li>
                    </ul>
                    <div className={isActive.key == 4 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleToggle(4)}><span className="fa fa-angle-right" /></div>
                </li>
                <li><Link href="/contact">Contact</Link></li>
                </ul>
            </div>
            <div className="contact-info">
                <div className="icon-box"><span className="icon-phone-call"></span>
                </div>
                <p><Link href="tel:123456789">(629) 555-0129</Link></p>
            </div>
            <div className="social-links">
                <ul className="clearfix list-wrap">
                    <li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
                    <li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
                    <li><Link href="#"><i className="fab fa-instagram"></i></Link></li>
                    <li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
                    <li><Link href="#"><i className="fab fa-youtube"></i></Link></li>
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