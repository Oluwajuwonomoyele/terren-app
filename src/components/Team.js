import ProfileCard from './ProfileCard';
import { TeamData } from '../TeamData.js'
import 'aos/dist/aos.css';

const Team = () => {
    return (  
        <section className="bg-e8">
            <div className="container mx-auto px-6 md:px-14 py-14 lg:py-28 text-center">  
                <h2 className="text-2xl md:text-3xl xl:text-[42px] font-bold mb-8" data-aos='fade-down'>The Team</h2>
                <p className='max-w-[600px] mx-auto' data-aos='fade-up' data-aos-duration='1000'>We are a team of bright minded Gen- Zs, versatile and ready to seamlessly connect real estate enterprises with investors to create optimal benefits for stakeholders. </p>
                <div className='flex flex-col items-center mt-12 gap-8 md:flex-wrap md:flex-row md:justify-center'>
                   { TeamData.map(data => 
                        <ProfileCard data={data} key={data.id}/>
                   )}
                </div>
            </div>
        </section>
    );
}
 
export default Team;