
export function Endpoints () {

    return (
        <div className="__MainEndpoints-Container">
            <div className="__MainEndpoints-Content">

                <h2>GET</h2>
                <p>Esta peticion nos trae todos los pilotos de la base de datos registrados.</p>
                <div className='CodeContainer'>
                    <div>
                        <p><span className='http'>http://</span><span className='direccion'>127.0.0.1</span><span className='endpoint'>/api/drivers</span></p>
                    </div>
                </div>
                <p>Esta peticion devuelve en formato JSON la informacion de un piloto en especifico que se busca por apellido o nombre.</p>
                <div className='CodeContainer'>
                    <div>
                        <p><span className='http'>http://</span><span className='direccion'>127.0.0.1</span><span className='endpoint'>/api/drivers/<span className='params'>:driverName</span></span></p>
                    </div>
                </div>
                <p>Ese endpoint lo que nos trae es en formato JSON todos los equipos de la formula 1 y su respectiva informacion.</p>
                <div className='CodeContainer'>
                    <div>
                        <p><span className='http'>http://</span><span className='direccion'>127.0.0.1</span><span className='endpoint'>/api/teams</span></p>
                    </div>
                </div>
                <h2>POST</h2>
                <p>Este endpoint nos permite crear un piloto en la base de datos.</p>
                <div className='CodeContainer'>
                    <div>
                        <p><span className='http'>http://</span><span className='direccion'>127.0.0.1</span><span className='endpoint'>/api/drivers</span></p>
                    </div>
                </div>
                <h2>PATCH</h2>
                <p>Este endpoint nos permite actualizar la informacion de un piloto en especifico.</p>
                <div className='CodeContainer'>
                    <div>
                        <p><span className='http'>http://</span><span className='direccion'>127.0.0.1</span><span className='endpoint'>/api/drivers</span></p>
                    </div>
                </div>
                <h2>DELETE</h2>
                <p>Este endpoint nos permite eliminar un piloto de la base de datos.</p>
                <div className='CodeContainer'>
                    <div>
                        <p><span className='http'>http://</span><span className='direccion'>127.0.0.1</span><span className='endpoint'>/api/drivers</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}