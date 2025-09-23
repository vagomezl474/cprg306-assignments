import ItemList from "./item-list";

export default function Page() {

return(
    <main className = "bg-gray-800 m-4 p-2">
        <h1 className="text-3xl text-blue-300">Shopping List</h1>
        <ItemList />
    </main>
);

}