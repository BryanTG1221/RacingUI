import { CardTeam } from './Atoms/cardTeams';
import {GetAllDataTest} from '../../JS/getDataAPI.js';
import '../../Styles/teamsStyle.css';
import {useEffect, useState } from "react"

export function Teams () {
    const [cards, setCards] = useState([])

    useEffect( () => {
        GetAllDataTest().then(response => setCards(response));
    },[]);
    
    return (
        <div className="_TeamsMain">
            {
                cards.map((card) => (
                  <CardTeam key={card.name} name={card.name} color={card.color} />
                ))
            }
        </div>
    )
}