import { Link } from "react-router-dom"

export default function Car(props) {
    function buildTitle() {
        if (props.showLink) {
            return (
                <h3><Link class="page-link text-primary" to={ `/inventory/${props.car.id}` }><strong>{props.car.year} {props.car.name}</strong></Link></h3>
            )    
        }
        else {
            return (
                <h3><strong>{props.car.year} {props.car.name}</strong></h3>
            )   
        }
    }

    return (
        <div className="row justify-content-center my-4">
        <div className="col-8 ">
        <div className="car card p-3">
            { buildTitle() }
            <hr />
            <h4>(ID #: {props.car.id})</h4>
            <p>Selling Price: {props.car.selling_price}</p>
            <p>KM Driven: {props.car.km_driven}</p>
            <p>Engine: {props.car.engine}</p>
            <p>Transmission: {props.car.transmission}</p>
            <p>Max Power: {props.car.max_power}</p>
            <p>Torque: {props.car.torque}</p>
            <p>Fuel Type: {props.car.fuel}</p>
            <p>Fuel Economy: {props.car.mileage}</p>
            <p>Seats: {props.car.seats}</p>
            <p>Owner: {props.car.owner}</p>
            <p>Seller Type: {props.car.seller_type}</p>
        </div>
        </div>
        </div>
    )
}