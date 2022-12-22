import { useState, useEffect, useContext } from "react";
import { DataContext } from '../contexts/DataProvider'
import Car from '../components/Car'

export default function Inventory() {
    const { cars } = useContext(DataContext)

    return (
        <div className="inventory">
            <h2><strong>Full Garage Inventory</strong></h2>
            <hr />
            { cars.map(car => <Car key={car.id} car={car} showLink={true}/>) }
        </div>
    )
}