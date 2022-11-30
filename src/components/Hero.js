import HeroBg from '../assets/hero.jpg';

const Hero = () => {
    return (  
        <section className="bg-customBlack">
            <div className="container mx-auto px-6 md:px-14 py-14 lg:py-28 text-white flex flex-col-reverse lg:flex-row gap-8 lg:justify-between items-center">
               <div className='lg:basis-[60%]'>
                    <h1 className='text-2xl xl:leading-[4rem] md:text-3xl xl:text-[50px] font-bold'>Creating economic alliances among African <span className='text-darkGrey'>companies</span></h1>
                    <p className='text-sm mt-8 leading-6 md:text-base lg:text-lg'>Terren connects real estate companies and financial institutions, with the financial institutions investing in the real estate companies, thereby easing the generation of short-term capital and benefiting the financial institutions with higher returns on investment deposit.</p>
               </div>
               <div className='lg:basis-1/2 overflow-hidden rounded-md'>
                    <img src={HeroBg} alt="Hero bg" />
               </div>
            </div>
        </section>
    );
}
 
export default Hero;