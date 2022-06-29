import "./main.css";
import gifts from '../../img/gifts.png';
import one_gift from '../../img/one_gift.png';

const main = () => {
    return (
        <section className='main'>
            <div className="container">
                <div className="container__title">
                    <h2>Давайте сверим <br />данные!</h2>
                    <p>Так ваши подарки обязательно вас найдут и придут вовремя</p>
                </div>
                <img className='container__gifts' src={gifts} alt='gifts'></img>
                <img className='container__one-gift' src={one_gift} alt='gifts'></img>
                <form className="container__form">
                    <div className="container__form-field">
                        <label className="container__form-label">Ваш номер телефона</label>
                        <input placeholder="+7 (____) ___ - __ - __" type="tel" id="tel" name="tel" required minlength="10" maxlength="10"></input>
                    </div>
                    <div className="container__form-field">
                        <label className="container__form-label">Введите e-mail, который связан с этим номером</label>
                        <input placeholder="Example@gmail.com" type="email" id="email" name="email" required></input>
                    </div>
                    <p>Нажимая на кнопку, я принимаю <a href="11">Политику конфиденциальности</a> и соглашаюсь получать сообщения.</p>
                    <button>Теперь всё верно</button>
                </form>
            </div>
        </section>
    );
}

export default main;