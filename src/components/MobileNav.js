const MobileNav = ({openNav, setOpenNav}) => {
    return ( 
        <div className={ openNav ? "inset-x-0 top-[76px] bg-f1 absolute w-full transition-all ease-linear duration-200": "mt-[84px] -top-[50%] bg-f1 absolute w-full transition-all ease-linear duration-200"} >
            <div className="py-8 flex flex-col items-center gap-4 font-semibold text-customBlack">
                <p className="hover:bg-customBlack py-2 px-4 hover:text-white rounded-md cursor-pointer transition-all ease-linear duration-200" onClick={() => setOpenNav(false)}>Home</p>
                <p className="hover:bg-customBlack py-2 px-4 hover:text-white rounded-md cursor-pointer transition-all ease-linear duration-200" onClick={() => setOpenNav(false)}>About</p>
                <p className="hover:bg-customBlack py-2 px-4 hover:text-white rounded-md cursor-pointer transition-all ease-linear duration-200" onClick={() => setOpenNav(false)}>Support & FAQ's</p>
            </div>
        </div>
     );
}
 
export default MobileNav;