import person from '../assets/svg/person-1.svg'
import Twitter from '../assets/svg/twitter.svg';

const Team = () => {
    return (  
        <section className="bg-e8">
            <div className="container mx-auto px-6 md:px-14 py-14 lg:py-28 text-center">  
                <h2 className="text-2xl md:text-3xl xl:text-[42px] font-bold mb-8">The Team</h2>
                <p className='max-w-[600px] mx-auto'>We are a team of bright minded Gen- Zs, versatile and ready to seamlessly connect real estate enterprises with investors to create optimal benefits for stakeholders. </p>
                <div className='flex flex-col items-center mt-12 gap-8 md:flex-wrap md:flex-row md:justify-center'>
                    <div className='bg-f1 py-8 px-4 rounded-lg text-center shadow-lg md:max-w-[310px] max-w-[400px] w-full'>
                        <div className='max-w-[200px] mx-auto mb-4'>
                            <img src={person} alt="" />
                        </div>
                        <h3 className='text-xl font-bold py-4'>Name, <span>Position</span></h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ullam obcaecati, voluptate qui minima animi.</p>
                        <div className='flex gap-4 justify-center py-4 cursor-pointer'>
                            <img src={Twitter} alt="twitter" />
                        </div>
                    </div>
                    <div className='bg-f1 py-8 px-4 rounded-lg text-center shadow-lg md:max-w-[310px] max-w-[400px] w-full'>
                        <div className='max-w-[200px] mx-auto mb-4'>
                            <img src={person} alt="" />
                        </div>
                        <h3 className='text-xl font-bold py-4'>Name, <span>Position</span></h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ullam obcaecati, voluptate qui minima animi.</p>
                        <div className='flex gap-4 justify-center py-4 cursor-pointer'>
                            <img src={Twitter} alt="twitter" />
                        </div>
                    </div>
                    <div className='bg-f1 py-8 px-4 rounded-lg text-center shadow-lg md:max-w-[310px] max-w-[400px] w-full'>
                        <div className='max-w-[200px] mx-auto mb-4'>
                            <img src={person} alt="" />
                        </div>
                        <h3 className='text-xl font-bold py-4'>Name, <span>Position</span></h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ullam obcaecati, voluptate qui minima animi.</p>
                        <div className='flex gap-4 justify-center py-4 cursor-pointer'>
                            <img src={Twitter} alt="twitter" />
                        </div>
                    </div>
                    <div className='bg-f1 py-8 px-4 rounded-lg text-center shadow-lg md:max-w-[310px] max-w-[400px] w-full'>
                        <div className='max-w-[200px] mx-auto mb-4'>
                            <img src={person} alt="" />
                        </div>
                        <h3 className='text-xl font-bold py-4'>Name, <span>Position</span></h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ullam obcaecati, voluptate qui minima animi.</p>
                        <div className='flex gap-4 justify-center py-4 cursor-pointer'>
                            <img src={Twitter} alt="twitter" />
                        </div>
                    </div>
                    <div className='bg-f1 py-8 px-4 rounded-lg text-center shadow-lg md:max-w-[310px] max-w-[400px] w-full'>
                        <div className='max-w-[200px] mx-auto mb-4'>
                            <img src={person} alt="" />
                        </div>
                        <h3 className='text-xl font-bold py-4'>Name, <span>Position</span></h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea ullam obcaecati, voluptate qui minima animi.</p>
                        <div className='flex gap-4 justify-center py-4 cursor-pointer'>
                            <img src={Twitter} alt="twitter" />
                        </div>
                    </div>
                    

                </div>
            </div>
        </section>
    );
}
 
export default Team;