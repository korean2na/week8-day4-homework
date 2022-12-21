// import setFeaturedCar from '../components/Inventory'

export default function Car(props) {
    return (
        // <div className="car" onClick={ () => setFeaturedCar(props.car) }>
        <div className="car">
            <h3>{props.car.year} {props.car.name}</h3>
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
            <hr />
        </div>
    )
}