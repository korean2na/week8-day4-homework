export default function DrivingCar(props) {
    return (
        <div className="car">
            <h3><strong>{props.car.year} {props.car.name}</strong></h3>
            <p>Engine: {props.car.engine}</p>
            <p>Transmission: {props.car.transmission}</p>
            <p>Max Power: {props.car.max_power}</p>
            <p>Torque: {props.car.torque}</p>
            <p>Fuel Type: {props.car.fuel}</p>
        </div>
    )
}