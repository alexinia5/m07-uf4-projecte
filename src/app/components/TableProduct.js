
function TableProduct (props) {
    return (
        <div>
            <div className="mt-6">
                {props.meals.length === 0 && <p className="text-center text-gray-500">No hay datos aún</p>}
                <ul className="space-y-2">
                    {props.meals.map((props.meal, props.index) (
                        <li key={props.index} className="p-2 rounded bg-gray-100">{props.meal.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TableProduct;