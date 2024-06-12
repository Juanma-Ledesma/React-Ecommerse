import {
    getFirestore, 
    collection, 
    getDocs, 
    query, 
    where, 
    doc, 
    getDoc 
} from "firebase/firestore";
import { app } from './config'

const db = getFirestore (app)

export const getItems = async () => {
    const querySnapshot = await getDocs(collection(db, "items"))

    querySnapshot.forEach((doc) => {
        console.log(doc.data())
    })
}

export const getItemsFromCategory = async (category) => {
    const q = category ? query(collection(db, "items"), where("category", "==", category)) : collection(db, "items")
    const querySnapshot = await getDocs(q)
    const Items = []

    querySnapshot.forEach((doc) => {
        Items.push({ ...doc.data(), id: doc.id })
    })

    Items
    return
}

export const getItem = async (id) => {
    const docRef = doc(db, "items", "id")
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
    } else {
    // docSnap.data() will be undefined in this case
        console.log("No such document!");
}

}