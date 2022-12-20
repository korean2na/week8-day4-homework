import { useState } from "react";

export default function Inventory() {
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

    return (
        <div className="inventory">
            <h2>Featured Car</h2>
            <div className="featured-car">
                <h3>{featuredCar.year} {featuredCar.make} {featuredCar.model}</h3>
                <p>Color: {featuredCar.color}</p>
                <p>Mileage: {featuredCar.miles}</p>
            </div>
            <hr />
            { cars.map(car => {
                return (
                    <div className="car" onClick={ () => setFeaturedCar(car) }>
                        <h3>{car.year} {car.make} {car.model}</h3>
                        <p>Color: {car.color}</p>
                        <p>Mileage: {car.miles}</p>
                        <p>Car ID: {car.id}</p>
                    </div>
                )
            }) }
        </div>
    )
}