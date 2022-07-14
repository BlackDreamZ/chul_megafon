import React from "react";
import { useForm } from "react-hook-form";
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

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        //        actions.updateAction(data);
        //props.history.push("./Result");
        reset();
    }

    return (
        <form className="container__form" onSubmit={handleSubmit(onSubmit)}>
            <div className="container__form-field">
                <label className="container__form-label">Ваш номер телефона</label>
                <input placeholder="+7 (____) ___ - __ - __" type="tel" id="tel" name="tel"
                    {...register("telephone",
                        {
                            required: "Поле обязательно к заполнению!",
                            minLength: { value: 10, message: 'Номер введён неверно!' },
                            maxLength: { value: 10, message: 'Номер введён неверно!' },
                        })} />
                {errors?.telephone && <div style={{ height: 20 }}><p style={{ color: 'red' }}>{errors?.telephone?.message || 'Неправильно введён номер телефона!'}</p></div>}
            </div>
            <div className="container__form-field">
                <label className="container__form-label">Введите e-mail, который связан с этим номером</label>
                <input placeholder="Example@gmail.com" type="email" id="email" name="email"
                    {...register("email",
                        {
                            required: "Поле обязательно к заполнению!",
                            minLength: { value: 5, message: 'Почта введена неверно!' },
                        })} />
                <div style={{ height: 20 }}>{errors?.email && <p style={{ color: 'red' }}>{errors?.email?.message || 'Неправильно введён номер телефона!'}</p>}</div>
            </div>
            <p className="form__paragraph">Нажимая на кнопку, я принимаю <a href="11">Политику конфиденциальности</a> и соглашаюсь получать сообщения.</p>
            <button type='submit' className="button__paragraph">Теперь всё верно</button>
        </form>
    );
}

export default Form;