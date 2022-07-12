import "./Main.scss";
import gifts from '../../../img/gifts.png';
import one_gift from '../../../img/one_gift.png';

const Main = () => {
    return (
        <section className='main'>
            <div className="main__container container">
                <div className="container__title">
                    <h2 className="container__offer">Давайте сверим <br />данные!</h2>
                    <p className="container__paragraph">Так ваши подарки обязательно вас найдут и придут вовремя</p>
                </div>
                <img className='container__gifts' src={gifts} alt='gifts'></img>
                <img className='container__one-gift' src={one_gift} alt='gifts'></img>
                <form className="container__form">
                    <div className="container__form-field">
                        <label className="container__form-label">Ваш номер телефона</label>
                        <input placeholder="+7 (____) ___ - __ - __" type="tel" id="tel" name="tel" required minLength="10" maxLength="10"></input>
                    </div>
                    <div className="container__form-field">
                        <label className="container__form-label">Введите e-mail, который связан с этим номером</label>
                        <input placeholder="Example@gmail.com" type="email" id="email" name="email" required></input>
                    </div>
                    <p className="form__paragraph">Нажимая на кнопку, я принимаю <a href="11">Политику конфиденциальности</a> и соглашаюсь получать сообщения.</p>
                    <button className="button__paragraph">Теперь всё верно</button>
                </form>
            </div>
        </section>
    );
}

export default Main;