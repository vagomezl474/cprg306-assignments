


export default function ItemsComp()
{

    let {name, quantity, category} = Item;

    


return(
    <main classname = "bg-cyan-800 m-4 p-4">
        <h1 classname="text-3xl">Shopping List!</h1>
        <ul>
            <li>Name: {name} </li>
            <li>Quantity: {quantity}</li>
            <li>Category: {category}</li>
        </ul>
    </main>
);


}