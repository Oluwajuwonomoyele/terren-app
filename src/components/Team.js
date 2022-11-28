import person from '../assets/svg/person-1.svg'
import Twitter from '../assets/svg/twitter.svg';
import Instagram from '../assets/svg/instagram.svg';
import M from '../assets/svg/m.svg';

const Team = () => {
    return (  
        <section className="bg-e8">
            <div className="container mx-auto px-4 py-14">  
                <h2 className="text-2xl font-bold text-center">The Team</h2>
                <div className='flex flex-col mt-8 gap-8'>
                    <div className='bg-f1 py-8 px-4 rounded-lg text-center shadow-lg'>
                        <div className='max-w-[200px] mx-auto'>
                            <img src={person} alt="" />
                        </div>
                        <h3 className='text-xl font-bold py-4'>Leahy, Dael</h3>
                        <p>Manager</p>
                        <div className='flex gap-4 justify-center py-4'>
                            <img src={Instagram} alt="instagram" />
                            <img src={Twitter} alt="twitter" />
                            <img src={M} alt="M" />
                        </div>
                    </div>
                    <div className='bg-f1 py-8 px-4 rounded-lg text-center shadow-lg'>
                        <div className='max-w-[200px] mx-auto'>
                            <img src={person} alt="" />
                        </div>
                        <h3 className='text-xl font-bold py-4'>Evins, Randie</h3>
                        <p>Ouvrier</p>
                        <div className='flex gap-4 justify-center py-4'>
                            <img src={Instagram} alt="instagram" />
                            <img src={Twitter} alt="twitter" />
                            <img src={M} alt="M" />
                        </div>
                    </div>
                    <div className='bg-f1 py-8 px-4 rounded-lg text-center shadow-lg'>
                        <div className='max-w-[200px] mx-auto'>
                            <img src={person} alt="" />
                        </div>
                        <h3 className='text-xl font-bold py-4'>Walcher, Wendye</h3>
                        <p>Responsable logistique</p>
                        <div className='flex gap-4 justify-center py-4'>
                            <img src={Instagram} alt="instagram" />
                            <img src={Twitter} alt="twitter" />
                            <img src={M} alt="M" />
                        </div>
                    </div>
                    <div className='bg-f1 py-8 px-4 rounded-lg text-center shadow-lg'>
                        <div className='max-w-[200px] mx-auto'>
                            <img src={person} alt="" />
                        </div>
                        <h3 className='text-xl font-bold py-4'>Howitt, Gino</h3>
                        <p>Directeur général</p>
                        <div className='flex gap-4 justify-center py-4'>
                            <img src={Instagram} alt="instagram" />
                            <img src={Twitter} alt="twitter" />
                            <img src={M} alt="M" />
                        </div>
                    </div>
                    <div className='bg-f1 py-8 px-4 rounded-lg text-center shadow-lg'>
                        <div className='max-w-[200px] mx-auto'>
                            <img src={person} alt="" />
                        </div>
                        <h3 className='text-xl font-bold py-4'>Gristhwaite, Gunilla</h3>
                        <p>Employé</p>
                        <div className='flex gap-4 justify-center py-4'>
                            <img src={Instagram} alt="instagram" />
                            <img src={Twitter} alt="twitter" />
                            <img src={M} alt="M" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
 
export default Team;