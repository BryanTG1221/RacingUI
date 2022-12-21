import { Link } from "react-router-dom";

export function LogoHeader() {
    const path = '../../../assets/RacingUI.svg';
  return (
    <Link to='/' className="logoContainer">
      <div className="logoContainer">
        <img src={path} alt="logo"  className="logoImg"/>
        <h1 className="nameLogo">RACING<span className="UIname">UI</span></h1>
      </div>
    </Link>
  );
}
