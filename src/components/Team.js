import juwon from '../assets/profiles/juwon.png'
import Twitter from '../assets/svg/twitter.svg';
import demilade from '../assets/profiles/demilade.jpg';
import joshua from '../assets/profiles/joshua.jpg';
import nova from '../assets/profiles/nova.png';
import rahmna from '../assets/profiles/Rahma.jpg';
import sikiru from '../assets/profiles/sikiru-product.jpg';

const Team = () => {
    return (  
        <section className="bg-e8">
            <div className="container mx-auto px-6 md:px-14 py-14 lg:py-28 text-center">  
                <h2 className="text-2xl md:text-3xl xl:text-[42px] font-bold mb-8">The Team</h2>
                <p className='max-w-[600px] mx-auto'>We are a team of bright minded Gen- Zs, versatile and ready to seamlessly connect real estate enterprises with investors to create optimal benefits for stakeholders. </p>
                <div className='flex flex-col items-center mt-12 gap-8 md:flex-wrap md:flex-row md:justify-center'>
                    <div className='bg-f1 px-4 rounded-lg text-center shadow-lg md:max-w-[310px] max-w-[400px] w-full  h-[480px] flex flex-col justify-center'>
                        <div className='max-w-[200px] mx-auto mb-4 rounded-full overflow-hidden'>
                            <img src={nova} alt="" />
                        </div>
                        <h3 className='text-xl font-bold py-4'>Deji, <span>CEO</span></h3>
                        <div className='flex gap-4 justify-center py-4 cursor-pointer'>
                            <img src={Twitter} alt="twitter" />
                        </div>
                    </div>
                    <div className='bg-f1 px-4 rounded-lg text-center shadow-lg md:max-w-[310px] max-w-[400px] w-full h-[480px] flex flex-col justify-center'>
                        <div className='max-w-[200px] mx-auto mb-4 rounded-full overflow-hidden'>
                            <img src={demilade} alt="" />
                        </div>
                        <h3 className='text-xl font-bold py-4'>Demilade, <span>COO</span></h3>
                        <div className='flex gap-4 justify-center py-4 cursor-pointer'>
                            <img src={Twitter} alt="twitter" />
                        </div>
                    </div>
                    <div className='bg-f1 px-4 rounded-lg text-center shadow-lg md:max-w-[310px] max-w-[400px] w-full h-[480px] flex flex-col justify-center'>
                        <div className='max-w-[200px] mx-auto mb-4 rounded-full overflow-hidden'>
                            <img src={rahmna} alt="" className='h-[200px] object-cover' />
                        </div>
                        <h3 className='text-xl font-bold py-4'>Rahma, <span>Administrative Officer</span></h3>
                        <div className='flex gap-4 justify-center py-4 cursor-pointer'>
                            <img src={Twitter} alt="twitter" />
                        </div>
                    </div>
                    <div className='bg-f1 px-4 rounded-lg text-center shadow-lg md:max-w-[310px] max-w-[400px] w-full  h-[480px] flex flex-col justify-center'>
                        <div className='max-w-[200px] mx-auto mb-4 rounded-full overflow-hidden'>
                            <img src={sikiru} alt="" />
                        </div>
                        <h3 className='text-xl font-bold py-4'>Sikiru, <span>Product</span></h3>
                        <div className='flex gap-4 justify-center py-4 cursor-pointer'>
                            <img src={Twitter} alt="twitter" />
                        </div>
                    </div>
                    <div className='bg-f1 px-4 rounded-lg text-center shadow-lg md:max-w-[310px] max-w-[400px] h-[480px] flex flex-col justify-center w-full'>
                        <div className='max-w-[200px] mx-auto mb-4 rounded-full overflow-hidden'>
                            <img src={joshua} alt="" />
                        </div>
                        <h3 className='text-xl font-bold py-4'>Joshua, <span>Engineering</span></h3>
                        <div className='flex gap-4 justify-center py-4 cursor-pointer'>
                            <img src={Twitter} alt="twitter" />
                        </div>
                    </div>
                    <div className='bg-f1 px-4 rounded-lg text-center shadow-lg md:max-w-[310px] max-w-[400px] h-[480px] flex flex-col justify-center w-full'>
                        <div className='max-w-[200px] mx-auto mb-4 rounded-full overflow-hidden'>
                            <img src={juwon} alt="" />
                        </div>
                        <h3 className='text-xl font-bold py-4'>Juwon, <span>Engineering</span></h3>
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