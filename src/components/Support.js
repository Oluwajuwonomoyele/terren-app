import { FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { AiFillTwitterSquare } from "react-icons/ai";

const Support = () => {
    return (  
        <section className="bg-f1">
            <div className="container mx-auto py-14 lg:py-28 px-6 md:px-14 flex flex-col gap-4 items-center text-center">
                <h2 className="text-2xl md:text-3xl xl:text-[42px] font-bold">Support</h2>
                <p className="text-darkGrey font-bold xl:text-xl xl:py-4">We’re always available to assist </p>
                <p>Reach out to us! We anticipate hearing from you. Let's get you going with reliable help you require.</p>
                <p>Contact us or see our FAQ</p>
                <div className="flex gap-4 text-3xl">
                    <div className="cursor-pointer">
                        <AiFillTwitterSquare />
                    </div>
                    <div className="cursor-pointer">
                        <GrMail />
                    </div>
                    <div className="cursor-pointer">
                        <FaInstagram />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default Support;