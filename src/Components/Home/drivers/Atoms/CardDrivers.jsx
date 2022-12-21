import { TbCrown,TbTrophy,TbMedal } from "react-icons/tb";
import Flag from "react-world-flags";

export function DriverCard ({name,lastName,driverImage,worldChampionships,podiums,wins,gradientColor,countryFlag,number,helmetImg}) {
    return (
        <div className="DriverCard__Main">
            <div className="DriverCard__Content">
                <div className="DriverCard__Content-Image" style={{background:`linear-gradient(360deg, ${gradientColor} 0%, #15151F 100%)`}}>
                    <img src={driverImage} alt="Driver" className="DriverCard__Content-Image--Driver"/>
                </div>
            </div>
            <div className="DriverCard__Container-info">
                <div className="DriverCard__Content-Info">
                    <div className="DriverCard__Content-Info--Name">
                        <div className="secundaryColorName" style={{backgroundColor:gradientColor}}></div>
                        <h3 className="titleDrivers">{name + ' ' + lastName}</h3>
                        <div className="driver-Champs">
                            <TbCrown className="iconName"/>
                            <p><b>{worldChampionships}</b></p>
                        </div>
                    </div>
                    <Flag code={countryFlag} className="flagDrivers"/>
                </div>
                <div className="DriverCard__Content-Stats">
                    <div className="DriverCard__Content-Stats--Container">
                        <TbTrophy className="iconName"/>
                        <p><b>{podiums}</b></p>
                    </div>
                    <div className="DriverCard__Content-Stats--Container">
                        <TbMedal className="iconName"/>
                        <p><b>{wins}</b></p>
                    </div>
                </div>
                <div className="DriverCard__Content-infoDown">
                    <p className="numberDrivers" style={{color:gradientColor}}>{number}</p>
                    <img src={helmetImg} className="helmetDrivers"/>
                </div>
            </div>
        </div>
    );
}