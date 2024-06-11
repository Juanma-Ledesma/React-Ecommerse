import { getFirestore, collection, getDocs } from "firebase/ firestore";
import { app } from './config'

const db = getFirestore (app) 


export const getItems = async () =>{
    const querySnapshot = await getDocs(collection(db, "items"));

querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});
}