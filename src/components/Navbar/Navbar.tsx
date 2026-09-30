import './navbar.css'
import './sidenav.css'
import logo from '@/assets/logo.png'
import logoTextOnly from '@/assets/logo-text-only.png'


import { Menu, X, House, Info, Settings, User, Mail, Shirt } from 'lucide-react';
import { NavLink } from 'react-router-dom'
import { useState } from 'react';

type IconProps = {
  className?: string;
};

type sideNavLinkProps = {
    link: string;
    text: string;
    sideIcon: React.ComponentType<IconProps>;
    onClose: () => void;
}

function SideNavLink({link, text, sideIcon: SideIcon, onClose}: sideNavLinkProps){
    return (
        <NavLink 
            className={({isActive}) => `side-nav-link ${isActive ? 'active' : ''}`}
            to={link}
            onClick={onClose}
        >
            <div className='side-nav-link-icon'>
                <SideIcon></SideIcon>
            </div>
            <p className='side-nav-link-text'>{text}</p>
        </NavLink>
    )
}

type sideNavProps = {
    open: boolean;
    onClose: () => void;
}


function SideNav({open, onClose}: sideNavProps){
    const sideNavWidthPixels: number = 210;

    return (
        <div 
            className={`side-nav ${open ? 'open' : 'closed'}`}
            style={{width: open ? `${sideNavWidthPixels}px` : '0px'}}
        >
            <div className='side-nav-top-bar'>
                <img className='side-nav-logo' src={logoTextOnly} alt='WashPresto'/>
                <div className="side-nav-close-button-padding" onClick={onClose}>
                    <X className="side-nav-close-button"></X>
                </div>
            </div>

            <div className='side-nav-links'>
                <SideNavLink 
                    link='/'
                    text='Home'
                    sideIcon={House}
                    onClose={onClose}
                />

                <SideNavLink 
                    link='/services'
                    text='Services'
                    sideIcon={Shirt}
                    onClose={onClose}
                />

                <SideNavLink 
                    link='/contact'
                    text='Contact'
                    sideIcon={Mail}
                    onClose={onClose}
                />

                <SideNavLink 
                    link='/about'
                    text='About'
                    sideIcon={Info}
                    onClose={onClose}
                />
            </div>
            
            <div className='side-nav-lower-section'>
                <div className='side-nav-lower-separator'></div>

                <SideNavLink 
                    link='/settings'
                    text='Settings'
                    sideIcon={Settings}
                    onClose={onClose}
                />

                <SideNavLink 
                    link='/login'
                    text='Login'
                    sideIcon={User}
                    onClose={onClose}
                />
            </div>
        </div>
    )
}

function NavBar(){
    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <div className='nav-bar'>
                <div>
                    
                    <NavLink to='/'>
                        <img className='nav-bar-logo' src={logo} alt='WashPresto'/>
                    </NavLink>
                </div>

                <div className='nav-bar-menu' onClick={() => setNavOpen(!navOpen)}>
                    <Menu></Menu>
                </div>


            </div>

            <SideNav
                open={navOpen}
                onClose={() => setNavOpen(false)}
            />
            
        </>



    )
}

export default NavBar;