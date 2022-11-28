import circle from '../assets/svg/black-circle.svg';
import rectangle from '../assets/svg/black-rectangle.svg'

const AboutUs = () => {
    return (  
        <section className="bg-e8 relative overflow-hidden" id="about-us">
            <img src={circle} alt="circle"  className='absolute opacity-20 w-[100px] left-1 top-1'/>
            <img src={rectangle} alt="rectangle" className='absolute opacity-20 w-[120px]
            -bottom-16 right-0'/>
            <div className="container mx-auto px-4 py-14 text-customBlack">
                <h2 className="text-2xl font-bold text-center">About Us</h2>
                <div className="flex flex-col gap-8 text-center mt-12">
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold">Why we want to change how you see money</h3>
                        <p>Almost all of us were brought up with the saving mentality but that doesn’t make you richer especially with the alarming rate of inflation but investing does. A lot of people have the false notion that investment is expensive and it requires a lot of capital so they miss out on a lot of life changing opportunities and that stunts economic and personal financial growth.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold">How we want to do it</h3>
                        <p>The Terren family has built a product that has been proven feasible to help young people invest in real estate for as low as 500 naira. People can buy units of a real estate project by a vetted real estate firm for a fixed price and earn above market return on their investment when the units are automatically sold back to the real estate firm after a few months (the maturity period). Terren will be integrated into your everyday mobile banking apps so investing can be made as easy as making a mobile transfer.</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="text-xl font-bold">Our final destination</h3>
                        <p>Our long term goal is to reorientate Africans on how they view, think and use money. We want to be a passive income stream for every African and help them develop overall better financial judgement with our system of earning through incentives. </p>
                    </div>
                </div>
                <div className="mt-8 italic font-bold max-w-[200px] ml-auto justify-end">
                    <p>The Terren Family</p>
                    <p>"Only Gen Zs create Gen Zs solutions"</p>

                </div>
            </div>
        </section>
    );
}
 
export default AboutUs;