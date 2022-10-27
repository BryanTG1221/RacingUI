import { DriverCard } from './Atoms/CardDrivers';
import '../../Styles/driversStyle.css';

export function Drivers() {
    return (
        <div className="__DriversContainer__Main">
            <div className="DriversContainer__Content">
                <h1>Drivers</h1>
                <DriverCard />
            </div>
        </div>
    );
}