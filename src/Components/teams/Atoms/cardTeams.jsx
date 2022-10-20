export function CardTeam ({name,color}) {
    return (
        <div className="_CardTeam">
            <div className="_CardTeam__LogoContainer" style={{backgroundColor:color}}>
                <img className="_CardTeam__LogoContainer-Logo" src='' alt={name + ' Logo'}/>
            </div>
            <div className="_CardTeam__InfoContainer">
                <h2>{name}</h2>
                <p>Forza Ferrari</p>
            </div>
        </div>
    )
}