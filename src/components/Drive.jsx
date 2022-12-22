import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from 'react-router-dom'
import DrivingCar from '../components/DrivingCar'
import { DataContext } from '../contexts/DataProvider'

export default function Drive(props) {
    const [car, setCar] = useState({})
    const { id } = useParams()
    let idTag = id
    const navigate = useNavigate()
    const { getCar } = useContext(DataContext)
    const { cars } = useContext(DataContext)

    // useEffect(() => {
    //     async function getCar() {
    //         const response = await fetch(`//my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
    //         const data = await response.json()
    //         setCar(data)
    //     }

    //     getCar()
    // }, [])

    useEffect(() => {
        async function handleLoadCar() {
            const data = await getCar(id)
            setCar(data)
        }

        handleLoadCar()
    }, [id])

    const [xCoord, setXCoord] = useState(props.x || 0)
    const [yCoord, setYCoord] = useState(props.y || 0)
    const [direction, setDirection] = useState(props.direction || "NORTH")

    function forward(dir, dist) {
        if (dir === "NORTH") {
            setYCoord(yCoord + dist)
        }
        if (dir === "SOUTH") {
            setYCoord(yCoord - dist)
        }
        if (dir === "EAST") {
            setXCoord(xCoord + dist)
        }
        if (dir === "WEST") {
            setXCoord(xCoord - dist)
        }
    }

    function backward(dir, dist) {
        if (dir === "NORTH") {
            setYCoord(yCoord - dist)
        }
        if (dir === "SOUTH") {
            setYCoord(yCoord + dist)
        }
        if (dir === "EAST") {
            setXCoord(xCoord - dist)
        }
        if (dir === "WEST") {
            setXCoord(xCoord + dist)
        }
    }

    function turnLeft(dir) {
        if (dir === "NORTH") {
            setDirection("WEST")
        }
        if (dir === "SOUTH") {
            setDirection("EAST")
        }
        if (dir === "EAST") {
            setDirection("NORTH")
        }
        if (dir === "WEST") {
            setDirection("SOUTH")
        }
    }

    function turnRight(dir) {
        if (dir === "NORTH") {
            setDirection("EAST")
        }
        if (dir === "SOUTH") {
            setDirection("WEST")
        }
        if (dir === "EAST") {
            setDirection("SOUTH")
        }
        if (dir === "WEST") {
            setDirection("NORTH")
        }
    }

    return (
        <div className="drive">
            <div className="drive-info">
                
                <h2><strong>Current Position: ({xCoord} X-Coord., {yCoord} Y-Coord.)</strong></h2>
                <h2><strong>Current Direction: {direction}</strong></h2>
                <hr />
                <button class="btn btn-primary" onClick={ () => forward(direction,5)  }>Drive Forward By 5</button>
                <br />
                <button class="btn btn-primary" onClick={ () => forward(direction,1) }>Drive Forward By 1</button>
                <br />
                <button class="btn btn-primary" onClick={ () => turnLeft(direction) }>Turn Left (90°)</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button class="btn btn-primary" onClick={ () => turnRight(direction)  }>Turn Right (90°)</button>
                <br />
                <button class="btn btn-primary" onClick={ () => backward(direction,1) }>Drive Backward By 1</button>
                <br />
                <button class="btn btn-primary" onClick={ () => backward(direction,5)  }>Drive Backward By 5</button>
            </div>
            <hr />
            <div className="car-info">
                <br />
                <h5>Currently Driving:</h5>
                <DrivingCar car={car}/>
                <div className="row justify-content-center">
                    {
                        (id > 0) ?
                        <div className="col-2">
                            <button class="btn btn-warning" onClick={() => {
                                idTag--
                                navigate(`/drive/${props.track}/${idTag}`)
                            }}>Previous Car</button>
                        </div>
                        : <></>
                    }
                    {
                        (id < cars.length - 1) ?
                        <div className="col-2">
                            <button class="btn btn-warning" onClick={() => {
                                idTag++
                                navigate(`/drive/${props.track}/${idTag}`)
                            }}>Next Car</button>
                        </div>
                        : <></>
                    }
                </div>
                <br />
            </div>
        </div>
    )
}