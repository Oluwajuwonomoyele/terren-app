const Features = () => {
    return (  
        <section className="bg-customBlack">
            <div className="container mx-auto px-6 py-14 flex flex-col gap-8 items-center">
                <div className="bg-lightGrey px-4 py-8 text-center rounded-md max-w-[600px]">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Our Mission</h1>
                    <p className="text-sm md:text-base leading-6">At Terren, our mission is to create partnerships with financial institutions and real-estate companies through strategic, easy and efficient methods to maximise profit among stakeholders</p>
                </div>
                <div className="bg-darkGrey px-4 md:px-6 py-8 text-center rounded-md text-white max-w-[425px]">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Our Vision</h1>
                    <p className="text-sm leading-6 md:text-base"> An efficient and uniquely designed set-up/structure that establishes/accomplishes allies African businesses.</p>
                </div>
            </div>
        </section>
    );
}
 
export default Features;