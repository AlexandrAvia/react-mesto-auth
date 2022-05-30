import logo from "../images/logo.svg";

function Header() {
  return (
    <header className="header">
      <img
        src={logo}
        alt="Логотип проекта с надписью Mesto Russia"
        className="header__logo"
      />
    </header>
  );
}

export default Header;
