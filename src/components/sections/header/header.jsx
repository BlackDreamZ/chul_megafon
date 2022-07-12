import "./Header.scss";
import logo from "../../../icons/megafon_logo.svg";
import magnifier from "../../../icons/magnifier.svg";
import key from "../../../icons/key.svg";
import navbar from "../../../img/navbar.png";
import navlock from "./head.jsx";

const Header = () => {
    return (
        <header className="megafon__header">
            <script defer src={navlock} />
            <div className="megafon__header-top">
                <div className="megafon__header-top-left">
                    <a href="1"><img src={logo} alt='Megafon' /></a>
                    <nav className='navbar'>
                        <ul className="navbar-first">
                            <li><a className='desktop' href="2">Бизнес-портал</a></li>
                            <li><a className='desktop' href="3">Инфобизнес</a></li>
                            <li><a className='desktop' href="4">Интернет-магазин</a></li>
                            <li className='toggle'>Все сервисы</li>
                        </ul>
                    </nav>
                </div>
                <div className="megafon__header-top-right">
                    <ul>
                        <li><a className='toggle' href="5">Бизнесу</a></li>
                        <li><a className='location' href="6">Москва и область</a></li>
                    </ul>
                </div>
                <div className="megafon__header-mobile">
                    <img className="megafon__header-mobile-img" src={magnifier} alt='magnifier' />
                    <div className="lk-and-navbar">
                        <img className="lk-and-navbar__image" src={key} alt='key' />
                        <img className="lk-and-navbar__image open__navbar" src={navbar} alt='navbar' />
                    </div>
                </div>
            </div>
            <div className="megafon__header-bottom">
                <div className="megafon__header-bottom-left">
                    <ul className="megafon__header-list-ul">
                        <li className="megafon__header-list-li"><a className='megafon__header-list-a toggle' href="7">Технологии</a></li>
                        <li className="megafon__header-list-li"><a className='megafon__header-list-a toggle' href="8">Бизнес-задачи</a></li>
                        <li className="megafon__header-list-li"><a className='megafon__header-list-a toggle' href="9">Связь и интернет</a></li>
                        <li className="megafon__header-list-li"><a className="megafon__header-list-a" href="4">Акции</a></li>
                        <li className="megafon__header-list-li"><a className="megafon__header-list-a" href="5">Поддержка</a></li>
                    </ul>
                </div>
                <div className="megafon__header-bottom-right">
                    <a className="megafon__header-bottom-right-a" href="6"><img className="megafon__header-bottom-right-image" src={magnifier} alt='magnifier' /></a>
                    <hr />
                    <a className="megafon__header-bottom-right-a cabinet" href="7">
                        <img className="megafon__header-bottom-right-image" src={key} alt='key' />
                        <a className='megafon__header-bottom-right-a toggle' href="10">Связь и интернет</a>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;