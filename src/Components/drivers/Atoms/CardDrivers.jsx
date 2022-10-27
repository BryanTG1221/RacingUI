export function DriverCard () {
    return (
        <div className="DriverCard__Main">
            <div className="DriverCard__Content">
                <div className="DriverCard__Content-Image">
                    <img src="https://i.pinimg.com/originals/7b/0d/1d/7b0d1d1b1f1b1b1b1b1b1b1b1b1b1b1b.jpg" alt="Driver" />
                </div>
            </div>
            <div className="DriverCard__Content-Info">
                <h1>Driver Name</h1>
                <p>Driver Description</p>
            </div>
        </div>
    );
}