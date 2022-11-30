import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const Partners = () => {
    return ( 
        <section className="bg-e8">
            <div className="container mx-auto px-6 md:px-12 py-14 lg:py-28 text-center">
                <h2 className="text-2xl font-bold md:text-3xl xl:text-[42px]">Our Partners</h2>
                <p className="mt-8 lg:text-lg xl:text-[26px]">Making strategic partnerships to make investment easily accessible to everyone</p>
                <div className='flex justify-between items-center mt-16'>
                    <FaChevronLeft className='cursor-pointer'/>
                    <FaChevronRight className='cursor-pointer'/>
                </div>
            </div>
        </section>
    );
}
 
export default Partners;