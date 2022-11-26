import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
const Partners = () => {
    return ( 
        <section className="bg-e8 text-center">
            <div className="container mx-auto px-4 py-14 lg:py-28">
                <h2 className="text-2xl font-bold lg:text-[42px]">Our Partners</h2>
                <p className="mt-4 lg:mt-8 font-semibold lg:text-[26px]">Making strategic partnerships to make investment easily accessible to everyone</p>
                <div className='flex justify-between items-center mt-8'>
                    <FaChevronLeft className='cursor-pointer'/>
                    <FaChevronRight className='cursor-pointer'/>
                </div>
            </div>
        </section>
    );
}
 
export default Partners;