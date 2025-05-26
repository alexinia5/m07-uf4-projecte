import CardMeal from "./CardMeal";

function BoxMeal (props) {
    return (
        <div>
            <div className="mt-12 flex flex-wrap justify-center items-center gap-4">
                {props.meals.length === 0 && <p className="text-center text-gray-500">No hay datos aún</p>}
                    {props.meals.map((meal) => (
                        <div key={meal.id}>
                            <CardMeal imgSrc={`${meal.imgSrc}`} name={meal.name} price={meal.price} allergens={meal.allergens}></CardMeal>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default BoxMeal;