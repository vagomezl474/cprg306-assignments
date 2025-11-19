"use client";
import { useState } from "react";


export default function NewItemPage(){


    const [quantity, setQuantity] = useState(1);

    const decrement = () => setQuantity(quantity - 1);

    const increment = () => {
        if(quantity < 20){
            setQuantity(quantity + 1)
        }
    }

    return(
    <div>
    <h2 className="text-2xl text-amber-600"> Press to increase or decrease! </h2>
    <p className="text-4xl text-amber-800">{quantity}</p>
      {/* Decrement Button */}
    <button type="button" className="bg-pink-800 text-pink-300 rounded px-6 py-3 hover:bg-pink-950" onClick={decrement} disabled={quantity === 1}>Decrease</button>
      {/* Increment Button */}
    <button type="button" className="bg-emerald-600 text-emerald-200 rounded px-6 py-3 hover:bg-emerald-800" onClick={increment} disabled={quantity === 20}>Increase</button>
    </div>
    );
}