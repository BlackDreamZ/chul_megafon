import "./header.css";
import logo from "../../icons/megafon_logo.svg";
import magnifier from "../../icons/magnifier.svg";
import key from "../../icons/key.svg";

const header = () => {
    return (
        <header className="megafon__header">
            <div className="megafon__header-top">
                <div className="megafon__header-top-left">
                    <a href="#"><img src={logo} alt='Megafon' /></a>
                    <nav>
                        <ul className="navbar-first">
                            <li><a href="#">Бизнес-портал</a></li>
                            <li><a href="#">Инфобизнес</a></li>
                            <li><a href="#">Интернет-магазин</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="megafon__header-top-right">
                    <ul>
                        <li><a className='toggle' href="#">Бизнесу</a></li>
                        <li><a className='location' href="#">Москва и область</a></li>
                    </ul>
                </div>
            </div>
            <div className="megafon__header-bottom">
                <div className="megafon__header-bottom-left">
                    <ul>
                        <li><a className='toggle' href="#">Технологии</a></li>
                        <li><a className='toggle' href="#">Бизнес-задачи</a></li>
                        <li><a className='toggle' href="#">Связь и интернет</a></li>
                        <li><a href="#">Акции</a></li>
                        <li><a href="#">Поддержка</a></li>
                    </ul>
                </div>
                <div className="megafon__header-bottom-right">
                    <a href="#"><img src={magnifier} alt='magnifier' /></a>
                    <div className="megafon__header-bottom-middle"></div>
                    <a href="#" className="cabinet">
                        <img src={key} alt='key' />
                        <a className='toggle' href="#">Связь и интернет</a>
                    </a>
                </div>
            </div>
        </header >
    );
}

export default header;