import { CardTeam } from './Atoms/cardTeams';
import {GetAllDataDrivers, GetAllDataTeams} from '../../../JS/getDataAPI.js';
import '../../../Styles/teamsStyle.css';
import {useEffect, useState } from "react"

export function Teams () {
    const [cards, setCards] = useState([])

    useEffect( () => {
        GetAllDataTeams().then(response => setCards(response));
    },[]);
    
    return (
        <div className="_TeamsMain" id='TeamsMain'>
            <div className="_TeamsMain__title">
                <h1 className='titleTeams'>Teams</h1>
            </div>
            {
                cards.map((card) => (
                  <CardTeam key={card.nameTeam} name={card.nameTeam} color={card.colorTeam} logoImg={card.logoTeam} secundaryColor={card.secundaryColor} sinceYear={card.sinceYear} base={card.countryTeam} powerUnit={card.powerUnit} worldChampionships={card.championships}/>
                ))
            }
        </div>
    )
}