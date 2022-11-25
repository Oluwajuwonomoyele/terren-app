import Logo from '.././assets/logo.png';
import { FaBars } from 'react-icons/fa'

const Navbar = ({openNav, setOpenNav}) => {
    return ( 
        <header className={ openNav ? "bg-f1 relative z-20" : "bg-f1 relative z-20 shadow-lg"}>
            <div className="py-4 px-4 container mx-auto flex justify-between items-center">
                <div className='w-[30%] cursor-pointer'>
                    <img src={Logo} alt="" />
                </div>

                <div className={ openNav ? 'bg-customBlack transition-all ease-in duration-300 text-white p-3 rounded-full cursor-pointer' : 'transition-all ease-out duration-200 cursor-pointer p-3 rounded-full'} onClick={() => setOpenNav(!openNav)}>
                    <FaBars size={20}/>
                </div>
            </div>
        </header>
    );
}
 
export default Navbar;