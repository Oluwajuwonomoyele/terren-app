import Logo from '../assets/logo.png'
import Twitter from '../assets/svg/twitter.svg'
import Instagram from '../assets/svg/instagram.svg'
import { Link } from 'react-router-dom'
import { TfiLinkedin } from 'react-icons/tfi'
import { BsFillTelephoneFill } from 'react-icons/bs'

const Footer = () => {
    return (  
        <footer className="bg-f1">
            <div className="container mx-auto py-14 px-8 lg:px-14 flex flex-col lg:flex-row lg:items-start gap-8 items-center text-center lg:text-left ">
               <div className='flex flex-col items-center lg:items-start lg:justify-start gap-6 lg:basis-[40%]'>
                    <Link to='/' className='w-[100px] md:w-[140px] max-w-[238px] cursor-pointer'>
                        <img src={Logo} alt="logo" />
                    </Link>
                    <p className='md:max-w-[550px]'>Terren connects industries to solve global economic problems through established strategic partnerships, for wealth creation</p>
                    <div className='flex gap-4 items-center'>
                        <img src={Twitter} alt="twitter-logo" className='cursor-pointer' />
                        <img src={Instagram} alt="instagram-logo" className='cursor-pointer' />
                        <div className='p-1 bg-customBlack rounded cursor-pointer'>
                            <TfiLinkedin size={20} className='text-white'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <a href="mailto:info@terren.tech" className='hover:underline font-bold'>info@terren.tech</a>
                        <div className='flex items-center gap-2'>
                            <BsFillTelephoneFill />
                            <a href="tel:+2349136125779" className='hover:underline font-bold'>09136125779</a>
                        </div>
                        </div>
                </div> 
                <div className='flex flex-col lg:flex-row lg:justify-center gap-8 lg:gap-[10rem] xl:gap-[20rem] lg:basis-[60%]'>
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-bold lg:text-[26px]'>Company</h2>
                        <div>
                            <p className='hover:underline cursor-pointer'>About</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4'>
                        <h2 className='font-bold lg:text-[26px]'>Legal</h2>
                        <div>
                            <p className='hover:underline cursor-pointer'>Privacy Policy</p>
                            <p className='hover:underline cursor-pointer'>Terms of service</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default Footer;