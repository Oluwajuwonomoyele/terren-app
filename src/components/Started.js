import yellow from '../assets/svg/yellow-arrow.svg';
import red from '../assets/svg/red-arrow.svg';
const Started = () => {
    return ( 
        <section className="bg-customBlack text-white text-center relative">
            <img src={yellow} alt="yellow" className='hidden lg:block absolute bottom-[11rem] left-[28rem]'/>
            <img src={red} alt="red" className='hidden lg:block absolute top-[12rem] right-[28rem]'/>
            <div className="px-8 py-14 lg:py-28">
                <h2 className="text-2xl font-bold lg:text-[42px]">How to get started</h2>
                <div className="mt-20 lg:mt-[10rem] flex flex-col lg:flex-row gap-8 items-center justify-center">
                    <div className="bg-darkGrey py-12 lg:py-0 px-8 rounded-md lg:max-w-[425px] lg:h-[343px] lg:text-2xl flex flex-col justify-center">
                        <h3 className="mb-6 font-bold">BUY</h3>
                        <p>Buy as many units of real estate for as low as <b>#500</b> per unit.</p>
                    </div>
                    <div className="bg-lightGrey py-12 px-8 rounded-md text-customBlack lg:max-w-[425px] lg:h-[343px] lg:text-2xl flex flex-col justify-center">
                        <h3 className="mb-6 font-bold">DURATION</h3>
                        <p>Hold units for a specific period of time. Usually 3 to 6 months or a year in high value assets.</p>
                    </div>
                    <div className="bg-darkGrey py-12 px-8 rounded-md lg:max-w-[425px] lg:h-[343px] lg:text-2xl flex flex-col justify-center">
                        <h3 className="mb-6 font-bold">PROFIT</h3>
                        <p>Automatically earn profit after holding your units for a specific period of time.</p>
                    </div>
                </div>
                <h2 className="text-xl font-bold mt-16 lg:mt-36 lg:text-[42px]">Then do it all again</h2>
            </div>
        </section>
    );
}
 
export default Started;