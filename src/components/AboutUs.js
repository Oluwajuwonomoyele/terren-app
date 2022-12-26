import circle from '../assets/svg/black-circle.svg';
import rectangle from '../assets/svg/black-rectangle.svg'
import 'aos/dist/aos.css'

const AboutUs = () => {
    return (  
        <section className="bg-e8 relative overflow-hidden" id="about-us">
            <div className="container mx-auto px-6 md:px-14 py-14 lg:py-28 text-customBlack">
                <h2 className="text-2xl md:text-3xl xl:text-[42px] font-bold text-center lg:hidden" data-aos='zoom-out'>About Us</h2>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 mt-12">
                    <div className="flex flex-col gap-8 lg:basis-[60%] text-center lg:text-left">
                        <h2 className="hidden lg:block text-2xl md:text-3xl xl:text-[42px] font-bold" data-aos='fade-down'>About Us</h2>
                        <p data-aos='fade-right' data-aos-duration='1000'>Terren started as a small university entrepreneurship project called ‘Vesity’ but was quickly reinvented. Vesity was a platform that split the cost of real estate projects into units and allows a person to purchase as many units which translated to them getting a return-on-investment at the maturity date. Terren was to be an API-based structure, integrated into existing digital banks to serve as its investment feature. The investment process was that of Vesity but the unique difference was the API integration. This idea was then morphed into the groundbreaking and innovative startup you are about to experience.</p>
                        <p data-aos='fade-left' data-aos-duration='1000'>Terren is a first of its kind establishment known for its dedication towards bridging the resource and communication gap between finance and the real estate world in Africa with the aim of solving the real estate deficit problem on the continent.</p>
                    </div>
                    <div className='lg:flex flex-col gap-5 justify-center hidden basis-[40%] items-center'>
                        <img src={circle} alt="" className='w-[8rem]' data-aos='fade-down'/>
                        <img src={rectangle} alt="" className='w-[8rem]' data-aos='fade-up'/>
                    </div>
                </div>
                <img src={circle} alt="circle"  className='absolute opacity-20 w-[100px] xs:w-[120px] left-1 xs:left-2 top-8 xs:top-2 lg:hidden animate-bounce' />
                <img src={rectangle} alt="rectangle" className='absolute opacity-20 w-[120px] -bottom-16 right-0 lg:hidden animate-bounce'/>
            </div>
        </section>
    );
}
 
export default AboutUs;