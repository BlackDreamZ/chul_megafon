import React from "react";
//import { useStateMachine } from "little-state-machine";
//import updateAction from "./updateAction";
import './Form.scss';
import okey from '../../icons/icon_okey.svg';

export default function Result() {

    /*const Result = props => {
        const { state } = useStateMachine(updateAction);
*/
    return (
        <form className="container__form">
            <img src={okey} alt='okey' />
            <h4>Изменения сохранены</h4>
            <p className="form__paragraph">Вы успешно привязали номер телефона к вашему e-mail адресу</p>
            <a href='30' className="form__link-back">Изменить данные</a>
        </form>
    );
}
// }