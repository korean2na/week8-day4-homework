import { useState, useEffect, useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Car from '../components/Car'
import { DataContext } from '../contexts/DataProvider'

export default function CarSingle() {
    const [car, setCar] = useState({})
    const { id } = useParams()
    let idTag = id
    const navigate = useNavigate()
    const { getCar } = useContext(DataContext)
    const { cars } = useContext(DataContext)

    useEffect(() => {
        async function handleLoadCar() {
            const data = await getCar(id)
            setCar(data)
        }

        handleLoadCar()
    }, [id])

    return(
        <div className="car">
            <Car car={car}/>
            <div className="row justify-content-center">
                {
                    (id > 0) ?
                    <div className="col-2">
                        <button class="btn btn-warning" onClick={() => {
                            idTag--
                            navigate(`/inventory/${idTag}`)
                        }}>Previous Car</button>
                    </div>
                    : <></>
                }
                {
                    (id < cars.length - 1) ?
                    <div className="col-2">
                        <button class="btn btn-warning" onClick={() => {
                            idTag++
                            navigate(`/inventory/${idTag}`)
                        }}>Next Car</button>
                    </div>
                    : <></>
                }
            </div>
        </div>
    )
}