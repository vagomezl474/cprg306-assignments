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
    <section className="bg-blue-200 rounded-2xl py-16" >
    <div className="max-w-4xl mx-auto px-4 text-center">
    <h2 className="text-4xl font-bold mb-4 text-blue-950"> Press to increase or decrease! </h2>
    <p className="text-7xl text-blue-800 mb-8">{quantity}</p>
      {/* Decrement Button */}
    <button type="button" className="px-8 py-3 bg-blue-700 hover:bg-blue-900 text-white font-medium rounded " onClick={decrement} disabled={quantity === 1}>-</button>
      {/* Increment Button */}
    <button type="button" className="px-8 py-3 bg-blue-700 hover:bg-blue-900 text-white font-medium rounded " onClick={increment} disabled={quantity === 20}>+</button>
    </div>
    </section>
    );
}