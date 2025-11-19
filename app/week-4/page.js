import NewItemPage from "./new-item";

export default function NewDisplayPage(){


    return(
        <main>
            <h3 className="text-2xl text-amber-800"> Add to Cart </h3>
            <NewItemPage className="bg-blue-600 text-cyan-300 rounded-2xl" ></NewItemPage>
        </main>
    );
}