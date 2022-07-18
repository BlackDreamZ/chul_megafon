import React from "react";
import { useState } from 'react';
import { useForm } from "react-hook-form";
import InputMask from 'react-input-mask';
import okey from '../../icons/icon_okey.svg';
//import { withRouter } from "react-router-dom";
//import { useStateMachine } from "little-state-machine";
//import updateAction from "./updateAction";
import './Form.scss';

const Form = props => {

    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
        reset,
    } = useForm();
    //    const { actions } = useStateMachine({ updateAction });

    const [
        isSuccess,
        setSuccess,
    ] = useState(false);

    let onSubmit = (data) => {
        console.log(JSON.stringify(data));
        console.log(isSuccess);
        reset();
        setSuccess(true);
    }

    return (
        <>
            {!isSuccess && <form className="container__form" onSubmit={handleSubmit(onSubmit)}>
                <div className="container__form-field">
                    <label className="container__form-label">Ваш номер телефона</label>
                    <InputMask placeholder="+7 (___) ___ - __ - __" type="tel" mask="+7 (999) 999-99-99" id="tel" name="tel"
                        onChange={e => this.handleChange(e, "+7 (____) ___ - __ - __")}
                        {...register("telephone",
                            {
                                required: "Поле обязательно к заполнению!",
                                minLength: { value: 16, message: 'Номер введён неверно!' },
                            })} />
                    {errors?.telephone && <div style={{ height: 20 }}><p style={{ color: 'red' }}>{errors?.telephone?.message || 'Неправильно введён номер телефона!'}</p></div>}
                </div>
                <div className="container__form-field">
                    <label className="container__form-label">Введите e-mail, который связан с этим номером</label>
                    <input placeholder="Example@gmail.com" type="email" id="email" name="email"
                        onChange={e => this.handleChange(e, 'phone')}
                        {...register("email",
                            {
                                required: "Поле обязательно к заполнению!",
                                minLength: { value: 5, message: 'Почта введена неверно!' },
                            })} />
                    {errors?.email && <div style={{ height: 20 }}><p style={{ color: 'red' }}>{errors?.email?.message || 'Неправильно введён номер телефона!'}</p></div>}
                </div>
                <p className="form__paragraph">Нажимая на кнопку, я принимаю <a href="11">Политику конфиденциальности</a> и соглашаюсь получать сообщения.</p>
                <button>Теперь всё верно</button>
            </form>
            }
            {
                isSuccess && <form className="container__form2" onSubmit={handleSubmit(onSubmit)}>
                    <img className="container__form2-image" src={okey} alt='okey' />
                    <h5 className="container__form2-title" >Изменения сохранены</h5>
                    <p className="container__form2-text">Вы успешно привязали номер телефона к вашему e-mail адресу</p>
                    <a className="container__form2-link" href="11">Изменить данные</a>
                </form>
            }</>
    );
}

export default Form;