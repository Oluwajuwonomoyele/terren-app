import Vase from '../assets/growwealth.png'
const Grow = () => {
    return ( 
        <section className="bg-customBlack text-white text-center relative mt-32">
            <div className="container mx-auto px-4 py-14 lg:py-24">
                <h1 className="uppercase text-2xl lg:text-[55px] font-bold">helping you grow your wealth</h1>
                <p className="mt-8 text-lg font-semibold lg:text-[33px] lg:leading-[60px]">If you dare to try <br /> on GOD</p>
            </div>
            <img src={Vase} alt="" className='absolute w-[290px] -top-[8rem] right-0 hidden lg:block' />
        </section>
    );
}
 
export default Grow;