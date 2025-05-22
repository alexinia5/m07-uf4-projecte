import Image from "next/image";

function TableProduct (props) {
    return (
        <div>
            <div className="mt-6">
                {props.meals.length === 0 && <p className="text-center text-gray-500">No hay datos aún</p>}
                <ul className="space-y-2">
                    {props.meals.map((meal) => (
                        <ul key={meal.id}>
                            <li className="p-2 rounded bg-gray-100">{meal.name}</li>
                            <li className="p-2 rounded bg-gray-100">{meal.price}€</li>
                            <li className="p-2 rounded bg-gray-100">{meal.allergens}</li>
                            <Image className="p-2 rounded-3xl bg-gray-100" width={100} height={100} src={`${meal.imgSrc}`} alt=""></Image>
                        </ul>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TableProduct;