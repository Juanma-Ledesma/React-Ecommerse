import { useState, useEffect } from "react";
import { data } from "../data";
import { ItemList } from "./ItemList";
import { getItems } from "../firebase/db";

function ItemListContainer () {
    const [items, setItems] = useState([])

	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve (data)
		}, 2000)
	})

    useEffect(() => {
        getItems()

        promise.then(res => setItems(res))
    }, [promise])

    return (
        <div>
            <>
                <ItemList products = {data}/>
            </>
        </div>
    )
}
    

export default ItemListContainer