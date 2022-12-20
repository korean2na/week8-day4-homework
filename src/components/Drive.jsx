import { useState } from "react";
import { useNavigate } from "react-router"

export default function Drive(props) {
    const navigate = useNavigate()
    navigate(0)

    const [cars, setCars] = useState([
        {
            "id": 1,
            "year": 2018,
            "make": "Honda",
            "model": "Accord",
            "color": "Black",
            "miles": 9999
        },
        {
            "id": 2,
            "year": 1981,
            "make": "DMC",
            "model": "DeLorean",
            "color": "Silver",
            "miles": 88888
        },
        {
            "id": 3,
            "year": 2013,
            "make": "Lexus",
            "model": "LFA",
            "color": "Blue",
            "miles": 1234
        },
        {
            "id": 4,
            "year": 2022,
            "make": "Ford",
            "model": "Focus",
            "color": "White",
            "miles": 5555
        },
        {
            "id": 5,
            "year": 2022,
            "make": "Hyundai",
            "model": "Genesis",
            "color": "Black",
            "miles": 7777
        }
    ])

    const [featuredCar, setFeaturedCar] = useState(cars[0])
    const [xCoord, setXCoord] = useState(props.x || 0)
    const [yCoord, setYCoord] = useState(props.y || 0)
    const [direction, setDirection] = useState(props.direction || "NORTH")

    function forward(dir, dist) {
        if (dir == "NORTH") {
            setYCoord(yCoord + dist)
        }
        if (dir == "SOUTH") {
            setYCoord(yCoord - dist)
        }
        if (dir == "EAST") {
            setXCoord(xCoord + dist)
        }
        if (dir == "WEST") {
            setXCoord(xCoord - dist)
        }
    }

    function backward(dir, dist) {
        if (dir == "NORTH") {
            setYCoord(yCoord - dist)
        }
        if (dir == "SOUTH") {
            setYCoord(yCoord + dist)
        }
        if (dir == "EAST") {
            setXCoord(xCoord - dist)
        }
        if (dir == "WEST") {
            setXCoord(xCoord + dist)
        }
    }

    function turnLeft(dir) {
        if (dir == "NORTH") {
            setDirection("WEST")
        }
        if (dir == "SOUTH") {
            setDirection("EAST")
        }
        if (dir == "EAST") {
            setDirection("NORTH")
        }
        if (dir == "WEST") {
            setDirection("SOUTH")
        }
    }

    function turnRight(dir) {
        if (dir == "NORTH") {
            setDirection("EAST")
        }
        if (dir == "SOUTH") {
            setDirection("WEST")
        }
        if (dir == "EAST") {
            setDirection("SOUTH")
        }
        if (dir == "WEST") {
            setDirection("NORTH")
        }
    }

    return (
        <div className="drive">
            <div className="drive-info">
                <h5>Currently Driving:</h5>
                <h3>{featuredCar.year} {featuredCar.make} {featuredCar.model}</h3>
                <p>Color: {featuredCar.color}</p>
                <p>Mileage: {featuredCar.miles}</p>
            </div>
            <br />
            <hr />
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
            <br />
        </div>
    )
}