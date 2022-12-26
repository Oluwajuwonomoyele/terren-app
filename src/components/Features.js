import 'aos/dist/aos.css';

const Features = () => {
    return (  
        <section className="bg-customBlack">
            <div className="container mx-auto px-6 md:px-14 py-14 lg:py-28 flex flex-col lg:flex-row lg:justify-center gap-8 items-center">
                <div className="bg-lightGrey px-4 md:px-6 xl:py-0 text-center rounded-md md:max-w-[600px] lg:max-w-[400px] xl:max-w-[500px] h-[320px] lg:h-[300px] flex flex-col justify-center" data-aos='flip-left' data-aos-duration='1500'>
                    <h1 className="text-[28px] md:text-3xl font-bold xl:text-[42px] mb-4 xl:mb-8">Our Mission</h1>
                    <p className="leading-7 xl:text-lg">At Terren, our mission is to create partnerships with financial institutions and real-estate companies through strategic, easy and efficient methods to maximise profit among stakeholders.</p>
                </div>
                <div className="bg-darkGrey px-4 md:px-6 py-8 xl:py-0 text-center rounded-md text-white md:max-w-[425px] lg:max-w-[400px] xl:max-w-[500px] h-[320px] lg:h-[300px] flex flex-col justify-center" data-aos='flip-right' data-aos-duration='1800'>
                    <h1 className="text-[28px] md:text-3xl xl:text-[42px] font-bold mb-4 xl:mb-8">Our Vision</h1>
                    <p className="leading-7 xl:text-lg"> To build an efficient and unique structure that fosters economic alliance between African industries.</p>
                </div>
            </div>
        </section>
    );
}
 
export default Features;