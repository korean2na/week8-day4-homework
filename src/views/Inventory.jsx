import { useState, useEffect } from "react";
import Car from '../components/Car'

export default function Inventory() {
    const [cars, setCars] = useState([])
    // const [featuredCar, setFeaturedCar] = useState({})

    useEffect(() => {
        async function getCars() {
            const response = await fetch(`//my-json-server.typicode.com/Llang8/cars-api/cars`)
            const data = await response.json()
            console.log(data)
            setCars(data)
            // setFeaturedCar(cars[0])
        }

        getCars()
    }, [])

    return (
        <div className="inventory">
            <h2>Full Garage Inventory</h2>
            <hr />
            {/* <div className="featured-car">
                <h2>Featured Car</h2>
                <h3>{featuredCar.year} {featuredCar.name}</h3>
                <h4>(ID #: {featuredCar.id})</h4>
                <p>Selling Price: {featuredCar.selling_price}</p>
                <p>KM Driven: {featuredCar.km_driven}</p>
                <p>Engine: {featuredCar.engine}</p>
                <p>Transmission: {featuredCar.transmission}</p>
                <p>Max Power: {featuredCar.max_power}</p>
                <p>Torque: {featuredCar.torque}</p>
                <p>Fuel Type: {featuredCar.fuel}</p>
                <p>Fuel Economy: {featuredCar.mileage}</p>
                <p>Seats: {featuredCar.seats}</p>
                <p>Owner: {featuredCar.owner}</p>
                <p>Seller Type: {featuredCar.seller_type}</p>
                <hr />
            </div> */}
            { cars.map(car => <Car key={car.id} car={car}/>) }
        </div>
    )
}