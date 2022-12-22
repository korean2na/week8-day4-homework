import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../contexts/DataProvider'
import { useParams, useNavigate } from 'react-router-dom'

export default function AddCar() {
    const { addCar } = useContext(DataContext)
    const navigate = useNavigate()

    function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)

        addCar(formData.get('name'), formData.get('year'), formData.get('selling_price'), formData.get('km_driven'), formData.get('fuel'), formData.get('seller_type'), formData.get('transmission'), formData.get('owner'), formData.get('mileage'), formData.get('engine'), formData.get('max_power'), formData.get('torque'), formData.get('seats'))

        event.target.reset()
        navigate('/inventory')
    }

    return (
        <div className="addCarForm">
            <h2><strong>Add a New Car to Inventory</strong></h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" />
                <input type="integer" name="year" placeholder="year" />
                <input type="integer" name="selling_price" placeholder="Selling Price" />
                <input type="integer" name="km_driven" placeholder="KM Driven" />
                <input type="text" name="fuel" placeholder="Fuel" />
                <input type="text" name="seller_type" placeholder="Seller Type" />
                <input type="text" name="transmission" placeholder="Transmission" />
                <input type="text" name="owner" placeholder="Owner" />
                <input type="text" name="mileage" placeholder="Mileage" />
                <input type="text" name="engine" placeholder="Engine" />
                <input type="text" name="max_power" placeholder="Max Power" />
                <input type="text" name="torque" placeholder="Torque" />
                <input type="integer" name="seats" placeholder="Seats" />
                <button>Add Car</button>
            </form>
        </div>
    )
}