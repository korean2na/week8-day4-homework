export default function DrivingCar(props) {
    return (
        <div className="car">
            <h3>{props.car.year} {props.car.name}</h3>
            <p>Engine: {props.car.engine}</p>
            <p>Transmission: {props.car.transmission}</p>
            <p>Max Power: {props.car.max_power}</p>
            <p>Torque: {props.car.torque}</p>
            <p>Fuel Type: {props.car.fuel}</p>
            <hr />
        </div>
    )
}