import './Footer.scss';
import letter from '../../../icons/icon_message.svg';
import six from '../../../icons/icon_six_years.svg';
import fb from '../../../icons/icon_FB.png';
import h from '../../../icons/icon_h.png';
import twitter from '../../../icons/icon_Twitter.png';
import ok from '../../../icons/icon_OK.png';
import yt from '../../../icons/icon_Youtube.png';
import vk from '../../../icons/icon_VK.png';
import inst from '../../../icons/icon_Instagram.png';
import Dropdown from '../../dropdown/Dropdown.jsx';

const Footer = () => {
    return (
        <footer>
            <div className="footer__container container">
                <div className='footer__container-top'>
                    <nav className='footer__container-top-nav'>
                        <Dropdown text={'Компания'} items={['О компании', 'Новости', 'Работа в МегаФоне', 'Условия оказания услуг']} />
                        <Dropdown text={'Организациям'} items={['Инвесторам', 'Партнёрам', 'Прессе', 'Лицензии']} />
                        <Dropdown text={'Интересное'} items={['Корпоративные дайджесты']} />
                    </nav>
                    <div className='footer__top-right'>
                        <h6 className='footer__top-right-title'>МегаФон в соцсетях</h6>
                        <div className='icons__media'>
                            <a className='icons__link' href='21'>
                                <img className='icons__image' src={fb} alt='fb' />
                            </a>
                            <a className='icons__link' href='22'>
                                <img className='icons__image' src={h} alt='h' />
                            </a>
                            <a className='icons__link' href='23'>
                                <img className='icons__image' src={twitter} alt='twitter' />
                            </a>
                            <a className='icons__link' href='24'>
                                <img className='icons__image' src={ok} alt='ok' />
                            </a>
                            <a className='icons__link' href='25'>
                                <img className='icons__image' src={yt} alt='yt' />
                            </a>
                            <a className='icons__link' href='26'>
                                <img className='icons__image' src={vk} alt='vk' />
                            </a>
                            <a className='icons__link' href='26'>
                                <img className='icons__image' src={inst} alt='inst' />
                            </a>
                        </div>
                        <div className='message'>
                            <img className='message__image' src={letter} alt='letter' />
                            <p className='message__paragraph' >Знаете, как сделать МегаФон Бизнес лучше? Напишите нам на <a href='@mailto:Feedback.b2b@megafon.ru'>Feedback.b2b@megafon.ru</a></p>
                        </div>
                    </div>
                </div>
                <hr className='mobile-hidden'></hr>
                <div className='footer__container-bottom'>
                    <p className='footer__container-bottom-left'>Продолжая использовать наш сайт, вы даете согласие на обработку файлов Cookies и других пользовательских данных, в соответствии с <a href='21'>Политикой конфиденциальности</a>.</p>
                    <div className='footer__container-bottom-right'>
                        <img className='container-bottom-right-image' src={six} alt='six years' />
                        <p className='container-bottom-right-paragraph'>© 2022 ПАО «МегаФон»</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;