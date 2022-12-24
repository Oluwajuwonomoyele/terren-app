import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import zylus from '../assets/zylus.png';
import erutan from '../assets/erutan.jpg';
const Partners = () => {
    return ( 
        <section className="bg-e8">
            <div className="container mx-auto px-6 md:px-12 py-14 lg:py-28 text-center">
                <h2 className="text-[28px] font-bold md:text-3xl xl:text-[42px]">Our Partners</h2>
                <div className='flex justify-center items-center mt-16'>
                    <FaChevronLeft className='cursor-pointer hidden'/>
                    <div className='flex flex-col lg:flex-row gap-4 items-center'>
                        <img src={erutan} alt="" />
                        <img src={zylus} alt="" className='max-h-[110px]'/>
                    </div>
                    <FaChevronRight className='cursor-pointer hidden'/>
                </div>
            </div>
        </section>
    );
}
 
export default Partners;