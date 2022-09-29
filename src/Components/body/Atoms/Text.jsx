import { Pattern } from './Pattern';
import { AiFillCheckCircle } from "react-icons/ai";
export function TextAPI () {

    return (
        <div className="__BodyMain-TextAPI">
        <div className='__BodyMain-TextInfo'>
            <h2 className="__BodyMain-TextAPI-Content">Info of all drivers,races and circuits of this season with this API<span> <AiFillCheckCircle className='icon'/></span> </h2>
        </div>
            <Pattern />
        </div>
    )
}