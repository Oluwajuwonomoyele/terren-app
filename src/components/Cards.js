import Card from "../Card";

const Cards = () => {
    return ( 
        <section className="bg-e8 text-customBlack">
            <div className="container mx-auto py-14 lg:py-28 px-8">
                <h2 className="text-2xl font-bold text-center lg:text-[55px]">How it looks like</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 lg:mt-32">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </section>
    );
}
 
export default Cards;