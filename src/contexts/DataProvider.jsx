import { useState, useEffect, createContext, useContext, useTransition } from "react";
import { getFirestore, collection, getDocs, doc, getDoc, Timestamp, addDoc, query, orderBy } from '@firebase/firestore'

export const DataContext = createContext()

export const DataProvider = function (props) {
    const db = getFirestore()
    const [cars, setCars] = useState([])

    useEffect(() => {
        async function getCars() {
            // const response = await fetch(`//my-json-server.typicode.com/Llang8/cars-api/cars`)
            // const data = await response.json()
            // console.log(data)
            // setCars(data)

            const querySnapshot = await getDocs(collection(db, 'cars'))
            const postDocs = []

            querySnapshot.forEach((doc) => {
                postDocs.push({
                    id: doc.id,
                    ...doc.data()
                })
            })

            setCars(postDocs)
        }

        getCars()
    }, [])

    async function getCar(id) {
        // const response = await fetch(`//my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
        // const data = await response.json()
        // setCar(data)

        const docRef = doc(db, 'cars', id)
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            return{
                id: docSnap.id,
                ...docSnap.data()
            }
        } else {
            console.log(`Car with ID # ${id} does not exist.`)
        }
    }


    const value = {
        cars,
        getCar
    }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}