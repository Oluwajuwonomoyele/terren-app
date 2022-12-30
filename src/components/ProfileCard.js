import Twitter from '../assets/svg/twitter.svg';
import { TfiLinkedin } from 'react-icons/tfi'
import 'aos/dist/aos.css';
const ProfileCard = ({data}) => {
    return ( 
        <div className='bg-f1 px-4 rounded-lg text-center shadow-lg md:max-w-[310px] max-w-[400px] h-[380px] lg:h-[480px] flex flex-col justify-center w-full' data-aos={data.zoomIn ? 'zoom-in' : 'zoom-out'}  data-aos-duration='1500'>
            <div className='max-w-[180px] mx-auto mb-4 rounded-full overflow-hidden'>
                <img src={data.img} alt="" className='h-[180px] object-cover'/>
            </div>
            <h3 className='text-xl font-bold py-4'>{data.name}, <span>{data.position}</span></h3>
            <div className='flex gap-4 justify-center py-4'>
                { data.twitterLink ? <a href={data.twitterLink} target='_blank' rel='noreferrer' className='cursor-pointer'><img src={Twitter} alt="twitter" /></a> : null }
                <a href={data.linkedInLink} target='_blank' rel='noreferrer' className='p-1 bg-customBlack rounded cursor-pointer'>
                    <TfiLinkedin size={20} className='text-white'/>
                </a>
            </div>
        </div>
    );
}
 
export default ProfileCard;