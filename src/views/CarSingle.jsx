import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Car from '../components/Car'

export default function CarSingle() {
    const [car, setCar] = useState({})
    const { id } = useParams()
    let idTag = id
    const navigate = useNavigate()

    useEffect(() => {
        async function getCar() {
            const response = await fetch(`//my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
            const data = await response.json()
            setCar(data)
        }

        getCar()
    }, [id])

    return(
        <div className="car">
            <Car car={car}/>
            {
                (id > 0) ?
                <button onClick={() => {
                    idTag--
                    navigate(`/inventory/${idTag}`)
                }}>Previous Car</button>
                : <></>
            }
            {
                // might need to get length of cars array from a separate fetch just to use for this if statement instead of hard coding in the max id
                (id < 15) ?
                <button onClick={() => {
                    idTag++
                    navigate(`/inventory/${idTag}`)
                }}>Next Car</button>
                : <></>
            }
        </div>
    )
}