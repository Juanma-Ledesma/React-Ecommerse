import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import  ItemList  from "./ItemList"
import { getItemsFromCategory } from "../firebase/db"

function ItemListContainer () {
    const [items, setItems] = useState([])
    const { id } = useParams()

    useEffect(() => {
        const getAndSetItems = async () => {
            const products = await getItemsFromCategory(id)
            setItems(products)
        }

        getAndSetItems()
    }, [id])

    return (
        <div>
            <>
                { <ItemList products = {items}/> }
            </>
        </div>
    )
}
    

export default ItemListContainer