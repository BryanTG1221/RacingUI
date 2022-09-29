import { TextAPI } from './Atoms/Text'
import { Visualizer } from './Atoms/Visualizer';
import '../../Styles/bodyStyles.css';

export function Body () {
    return (
        <div className="_BodyMain">
            <TextAPI />
            <Visualizer />
        </div>
    )
}