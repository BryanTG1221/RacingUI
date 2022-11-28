import { DriverCard } from './Atoms/CardDrivers';
import '../../../Styles/driversStyle.css';
import {GetAllDataDrivers} from '../../../JS/getDataAPI.js';
import { useEffect, useState } from 'react';

export function Drivers() {

    const [drivers, setDrivers] = useState([]);

    useEffect( () => {
        GetAllDataDrivers().then(response => setDrivers(response));
    },[]);
    console.log(drivers);

    return (
        <div className="__DriversContainer__Main" id='DriversMain'>
            <div className="DriversContainer__Content">
                <h1>Drivers</h1>
                <div className="__DriversContainer-Content--Cards">
                    {
                        drivers.map((driver) => (
                            <DriverCard key={driver.nameDriver + driver.lastnameDriver } name={driver.nameDriver} lastName = {driver.lastnameDriver} driverImage={driver.driverImage} worldChampionships={driver.worldChampionships} podiums = {driver.podiumsDriver} wins={driver.winsDriver} gradientColor={driver.gradientColor} countryFlag={driver.countryDriver} number={driver.numberDriver} helmetImg={driver.helmetImage}/>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}