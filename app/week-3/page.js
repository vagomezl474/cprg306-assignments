
export default function itemPage(itemLIST)
{


let {Iname, Iquantity, Icategory} = itemLIST;


return(
    <main className = "bg-cyan-800 m-4 p-4">
        <h1 className="text-3xl">ShoppingList</h1>
        <ul>
            <li>Name: {Iname} </li>
            <li>Quantity: {Iquantity}</li>
            <li>Category: {Icategory}</li>
        </ul>
    </main>
);


}