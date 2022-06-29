import "./header.css";
import logo from "../../icons/megafon_logo.svg";
import magnifier from "../../icons/magnifier.svg";
import key from "../../icons/key.svg";

const header = () => {
    return (
        <header className="megafon__header">
            <div className="megafon__header-top">
                <div className="megafon__header-top-left">
                    <a href="1"><img src={logo} alt='Megafon' /></a>
                    <nav>
                        <ul className="navbar-first">
                            <li><a href="2">Бизнес-портал</a></li>
                            <li><a href="3">Инфобизнес</a></li>
                            <li><a href="4">Интернет-магазин</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="megafon__header-top-right">
                    <ul>
                        <li><a className='toggle' href="5">Бизнесу</a></li>
                        <li><a className='location' href="6">Москва и область</a></li>
                    </ul>
                </div>
            </div>
            <div className="megafon__header-bottom">
                <div className="megafon__header-bottom-left">
                    <ul>
                        <li><a className='toggle' href="7">Технологии</a></li>
                        <li><a className='toggle' href="8">Бизнес-задачи</a></li>
                        <li><a className='toggle' href="9">Связь и интернет</a></li>
                        <li><a href="4">Акции</a></li>
                        <li><a href="5">Поддержка</a></li>
                    </ul>
                </div>
                <div className="megafon__header-bottom-right">
                    <a href="6"><img src={magnifier} alt='magnifier' /></a>
                    <hr />
                    <a href="7" className="cabinet">
                        <img src={key} alt='key' />
                        <a className='toggle' href="10">Связь и интернет</a>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default header;