import "./Main.scss";
import gifts from '../../../img/gifts.png';
import one_gift from '../../../img/one_gift.png';
import Form1 from '../../form/Form1.jsx';
import Form2 from '../../form/Form2.jsx';
//import Map from '../../try_route/Route.jsx';

const Main = () => {
    return (
        <section className='main'>
            <div className="main__container container">
                <div className="container__title">
                    <h2 className="container__offer">Давайте сверим <br />данные!</h2>
                    <p className="container__paragraph">Так ваши подарки обязательно вас найдут и придут вовремя</p>
                </div>
                {(Form1.property && Form2.property) ?
                    <Form2 />
                    :
                    <Form1 />
                }
                <img className='container__gifts' src={gifts} alt='gifts'></img>
                <img className='container__one-gift' src={one_gift} alt='gifts'></img>

            </div>
        </section>
    );
}

export default Main;