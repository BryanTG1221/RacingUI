export function CardTeam ({name,color,logoImg,secundaryColor,sinceYear,base,powerUnit,worldChampionships}) {
    return (
        <div className="_CardTeam">
            <div className="_CardTeam__LogoContainer" style={{backgroundColor:color}}>
                <img className="_CardTeam__LogoContainer-Logo" src={logoImg} alt={name + ' Logo'}/>
            </div>
            <div className="_CardTeam__InfoContainer">
                <div className="nameTeamContent">
                    <div className="secundaryColorName" style={{backgroundColor:secundaryColor}}></div>
                    <h3 className="titleTeams">{name}</h3>
                </div>
                <div className="__infoTeamContent">
                    <ul className="__infoTeamContent-dataList">
                        <li className="__infoTeamContent-title"><b>Since Year:</b> {sinceYear}</li>
                        <li className="__infoTeamContent-title"><b>Base:</b> {base}</li>
                        <li className="__infoTeamContent-title"><b>Power:</b> {powerUnit}</li>
                        <li className="__infoTeamContent-title"><b>World Championships:</b> {worldChampionships}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}   