import { useState, useEffect, createContext, useContext, useTransition } from "react";
import { getFirestore, collection, getDocs, doc, getDoc, Timestamp, addDoc, query, orderBy, limit, setDoc, collectionGroup } from '@firebase/firestore'
import { AuthContext } from "./AuthProvider";

export const DataContext = createContext()

export const DataProvider = function (props) {
    const db = getFirestore()
    const [cars, setCars] = useState([])
    const { user } = useContext(AuthContext)

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

    async function addCar(name, year, selling_price, km_driven, fuel, seller_type, transmission, owner, mileage, engine, max_power, torque, seats) {
        const newCar = {
            name: name,
            year: year,
            selling_price: selling_price,
            km_driven: km_driven,
            fuel: fuel,
            seller_type: seller_type,
            transmission: transmission,
            owner: owner,
            mileage: mileage,
            engine: engine,
            max_power: max_power,
            torque: torque,
            seats: seats,
        }

        const doc = await addDoc(collection(db, 'cars'), newCar)

        newCar.id = doc.id

        setCars([newCar, ...cars])
    }

    const value = {
        cars,
        getCar,
        addCar
    }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}