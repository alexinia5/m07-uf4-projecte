
function BtnTypeMeal (props) {

    function clickTypes (type) {
        props.searchTypes(type)
    }

    return (
        <div className="flex flex-row justify-center items-center">
            <button onClick={() => clickTypes('starter')} type="button" className="text-white bg-stone-400 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-700 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-stone-400 dark:hover:bg-stone-700 dark:focus:bg-stone-700 dark:border-stone-700">ENTRANTES</button>
            <button onClick={() => clickTypes('main')} type="button" className="text-white bg-stone-400 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-700 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-stone-400 dark:hover:bg-stone-700 dark:focus:bg-stone-700 dark:border-stone-700">PRINCIPALES</button>
            <button onClick={() => clickTypes('dessert')} type="button" className="text-white bg-stone-400 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-700 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-stone-400 dark:hover:bg-stone-700 dark:focus:bg-stone-700 dark:border-stone-700">POSTRES</button>
            <button onClick={() => clickTypes('drink')} type="button" className="text-white bg-stone-400 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-700 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-stone-400 dark:hover:bg-stone-700 dark:focus:bg-stone-700 dark:border-stone-700">BEBIDAS</button>
            <button onClick={() => clickTypes('vegetarian')} type="button" className="text-white bg-stone-400 hover:bg-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-700 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-stone-400 dark:hover:bg-stone-700 dark:focus:bg-stone-700 dark:border-stone-700">VEGETARIANOS</button>
        </div>
    );
}

export default BtnTypeMeal;