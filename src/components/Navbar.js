import Logo from '.././assets/logo.png';
import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Navbar = ({openNav, setOpenNav}) => {
    return ( 
        <header className={ openNav ? "bg-f1 relative z-20" : "bg-f1 relative z-20 shadow-lg"}>
            <div className="py-4 px-4 container mx-auto flex justify-between items-center">
                <div className='w-[120px] lg:w-[180px] max-w-[255px] cursor-pointer'>
                    <img src={Logo} alt="logo" />
                </div>

                <div className='lg:flex gap-8 items-center hidden'>
                    <NavLink to='/' className='text-customBlack py-2 px-4 rounded-md border-2 border-transparent hover:bg-customBlack hover:text-white transition-all ease-linear duration-200 cursor-pointer'>Home</NavLink>
                    <NavLink to='/about' className='text-customBlack py-2 px-4 rounded-md border-2 border-transparent hover:bg-customBlack hover:text-white transition-all ease-linear duration-200 cursor-pointer'>About</NavLink>
                    <NavLink to='/faq' className='text-customBlack py-2 px-4 rounded-md border-2 border-transparent hover:bg-customBlack hover:text-white transition-all ease-linear duration-200 cursor-pointer'>Support & FAQ's</NavLink>
                </div>

                <div className='hidden lg:block'>
                    <button className='bg-customBlack text-white py-2 px-4 rounded-md border-2 border-customBlack hover:bg-transparent hover:text-customBlack transition-all ease-linear duration-200 cursor-pointer'>Get Started</button>
                </div>

                <div className={ openNav ? 'bg-customBlack transition-all ease-in duration-300 text-white p-3 rounded-full cursor-pointer lg:hidden' : 'transition-all ease-out duration-200 cursor-pointer p-3 rounded-full lg:hidden'} onClick={() => setOpenNav(!openNav)}>
                    <FaBars size={20}/>
                </div>
            </div>
        </header>
    );
}
 
export default Navbar;