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
        props.Form2.approve = (false);
    }

    return (
        <form className="container__form" onSubmit={handleSubmit(onSubmit)}>
            <img src='../../icons/icon_okey.svg' alt='okey' />
            <h5>Изменения сохранены</h5>
            <p className="form__paragraph">Вы успешно привязали номер телефона к вашему e-mail адресу</p>
            <a href="11">Изменить данные</a>
        </form>
    );
}

export default Form;