
export function LogoHeader() {
    const path = '../../../assets/RacingUI.svg';
  return (
    <div className="logoContainer">
      <img src={path} alt="logo"  className="logoImg"/>
      <h1 className="nameLogo">RACING<span className="UIname">UI</span></h1>
    </div>
  );
}
