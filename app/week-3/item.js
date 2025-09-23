


export default function Item({itemObj})
{

    let {name, quantity, category} = itemObj;


return(
    <main className = "bg-gray-800 m-4 p-2">
        <ul className="bg-black">
            <li>Name: {name} </li>
            <li>Quantity: {quantity}</li>
            <li>Category: {category}</li>
        </ul>
    </main>
);


}