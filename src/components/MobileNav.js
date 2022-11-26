import { NavLink } from 'react-router-dom'

const MobileNav = ({openNav, setOpenNav}) => {
    return ( 
        <div className={ openNav ? "inset-x-0 top-[76px] bg-f1 absolute w-full transition-all ease-linear duration-200 z-20": "mt-[84px] -top-[50%] bg-f1 absolute w-full transition-all ease-linear duration-200 z-20"} >
            <div className="py-8 flex flex-col items-center gap-4 font-semibold text-customBlack">
                <NavLink to='/' className="hover:bg-customBlack py-2 px-4 hover:text-white rounded-md cursor-pointer transition-all ease-linear duration-200" onClick={() => setOpenNav(false)}>Home</NavLink>
                <NavLink to='/about' className="hover:bg-customBlack py-2 px-4 hover:text-white rounded-md cursor-pointer transition-all ease-linear duration-200" onClick={() => setOpenNav(false)}>About</NavLink>
                <NavLink to='/faq' className="hover:bg-customBlack py-2 px-4 hover:text-white rounded-md cursor-pointer transition-all ease-linear duration-200" onClick={() => setOpenNav(false)}>Support & FAQ's</NavLink>
                <button className='bg-customBlack text-white py-2 px-4 rounded-md border-2 border-customBlack hover:bg-transparent hover:text-customBlack transition-all ease-linear duration-200 cursor-pointer' onClick={() => setOpenNav(false)}>Get Started</button>
            </div>
        </div>
     );
}
 
export default MobileNav;