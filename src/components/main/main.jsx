import "./main.css";
import gifts from '../../img/gifts.png';

const main = () => {
    return (
        <section className='main'>
            <div className="container">
                <div className="container__title">
                    <h2>Давайте сверим <br />данные!</h2>
                    <p>Так ваши подарки обязательно вас найдут и придут вовремя</p>
                </div>
                <img src={gifts}></img>
                <form className="container__form">
                    <div className="container__form-field">
                        <label className="container__form-label">Ваш номер телефона</label>
                        <input placeholder="+7 (____) ___ - __ - __" type="tel" id="tel" name="tel" required minlength="10" maxlength="10"></input>
                    </div>
                    <div className="container__form-field">
                        <label className="container__form-label">Введите e-mail, который связан с этим номером</label>
                        <input placeholder="Example@gmail.com" type="email" id="email" name="email" required></input>
                    </div>
                    <p>Нажимая на кнопку, я принимаю <a href="#">Политику конфиденциальности</a> и соглашаюсь получать сообщения.</p>
                    <button>Теперь всё верно</button>
                </form>
            </div>
        </section>
    );
}

export default main;