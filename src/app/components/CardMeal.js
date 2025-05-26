import Image from "next/image";

function CardMeal (props) {
    return (
        <div className="relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96">
            <div className="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
                <Image src={props.imgSrc} width={400} height={100} alt=""/>
            </div>
            <div className="p-4">
                <h6 className="mb-2 text-slate-800 text-xl font-semibold">{props.name}</h6>
                <p className="text-slate-600 leading-normal font-light">{props.price}€</p>
                {props.allergens && (
                    <p className="text-slate-600 leading-normal font-light">
                        Alergias: {props.allergens}
                    </p>
                )}
            </div>
        </div>  
    );
}

export default CardMeal;