import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import DrivingCar from '../components/DrivingCar'

export default function Drive(props) {
    const [car, setCar] = useState({})
    const { id } = useParams()

    useEffect(() => {
        async function getCar() {
            const response = await fetch(`//my-json-server.typicode.com/Llang8/cars-api/cars/${id}`)
            const data = await response.json()
            setCar(data)
            console.log(data)
        }

        getCar()
    }, [])

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
            <div className="car-info">
                <h5>Currently Driving:</h5>
                <DrivingCar car={car}/>
            </div>
            <div className="drive-info">
                <h2>Current Position: ({xCoord} X-Coord., {yCoord} Y-Coord.)</h2>
                <h2>Current Direction: {direction}</h2>
                <hr />
                <br /><br />
                <button onClick={ () => forward(direction,5)  }>Drive Forward By 5</button>
                <br />
                <button onClick={ () => forward(direction,1) }>Drive Forward By 1</button>
                <br />
                <button onClick={ () => turnLeft(direction) }>Turn Left (90°)</button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={ () => turnRight(direction)  }>Turn Right (90°)</button>
                <br />
                <button onClick={ () => backward(direction,1) }>Drive Backward By 1</button>
                <br />
                <button onClick={ () => backward(direction,5)  }>Drive Backward By 5</button>
            </div>
            <br />
        </div>
    )
}