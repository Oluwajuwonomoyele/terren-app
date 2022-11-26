import House from './assets/estate-2.jpg'
const Card = () => {
    return ( 
        <div className="bg-f1 pb-4 overflow-hidden rounded-md shadow-xl">
            <div className='h-[300px]'>
                <img src={House} alt="house" className='h-full object-cover' />
            </div>
            <div className='px-4 mt-8'>
                <h2 className='font-bold text-lg lg:text-[26px]'>Name of Estate</h2>
                <h3 className='font-bold mt-4 lg:text-[14px]'>Description</h3>
                <p className='mt-4 lg:text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi magnam nisi nihil natus molestiae accusamus nobis ducimus numquam a officiis sed odit culpa, enim mollitia...</p>
                <div className='mt-4 grid grid-rows-2 grid-cols-2 lg:grid-rows-1 lg:grid-cols-4 gap-2 lg:gap-0 lg:text-[14px] lg:text-center lg:items-center lg:justify-center'>
                    <div>
                        <h2 className='font-bold'>Duration</h2>
                        <p>6 Months</p>
                    </div>
                    <div>
                        <h2 className='font-bold'>ROI</h2>
                        <p>30%</p>
                    </div>
                    <div>
                        <h2 className='font-bold'>Available</h2>
                        <p>Less than 10%</p>
                    </div>
                    <div>
                        <h2 className='font-bold'>Amount/unit</h2>
                        <p>#500</p>
                    </div>
                </div>
                <button className='bg-customBlack text-white py-2 px-4 rounded-md border-2 border-customBlack hover:bg-transparent hover:text-customBlack transition-all ease-linear duration-200 cursor-pointer mt-8 w-full'>View</button>
            </div>
        </div>
    );
}
 
export default Card;