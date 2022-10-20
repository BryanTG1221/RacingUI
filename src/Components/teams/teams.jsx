import { CardTeam } from './Atoms/cardTeams';
import {GetAllDataTest} from '../../JS/getDataAPI.js';
import '../../Styles/teamsStyle.css';

export function Teams () {
    const dataResponse = GetAllDataTest();
    console.log(dataResponse);
    return (
        <div className="_TeamsMain">
            <CardTeam name="Ferrari" color="red"/>
            <CardTeam name="RedBull Racing" color = "blue"/>
        </div>
    )
}