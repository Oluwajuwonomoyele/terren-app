import HeroBg from '../assets/hero.jpg';
import 'aos/dist/aos.css'

const Hero = () => {

    return (  
        <section className="bg-customBlack h-[90vh] lg:h-[91vh] relative flex items-center">
            <img src={HeroBg} alt="Hero bg" className='absolute lg:hidden h-full object-cover opacity-30 ' />
            <div className="container mx-auto px-6 md:px-14 py-14 lg:py-28 text-white flex flex-col-reverse lg:flex-row gap-8 lg:justify-between items-center relative z-10">
               <div className='lg:basis-[60%]'>
                    <h1 data-aos='fade-down' className='text-[35px] leading-[2.5rem] xl:leading-[4rem] sm:text-4xl xl:text-[50px] font-bold'>Creating economic alliances among African <span className='text-darkGrey'>companies</span></h1>
                    <p className='mt-4 xl:mt-8 leading-6 lg:text-lg' data-aos='fade-right'>Terren connects real estate companies and financial institutions, we revolutionize investment with our fractional funding strategy that allows multiple financial institutions to flexibly invest in a single real estate project, thereby easing the generation of short-term capital and benefiting the financial institutions with higher returns on investment deposits.</p>
               </div>
               <div className='hidden lg:block lg:basis-1/2 lg:overflow-hidden rounded-md' data-aos='zoom-out'>
                    <img src={HeroBg} alt="Hero bg" />
               </div>
            </div>
        </section>
    );
}
 
export default Hero;