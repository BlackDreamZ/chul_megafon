import "./Dropdown.scss";
import { useCheck } from "../../hooks/useCheck";

export const Dropdown = ({ text, items }) => {
    const { classIsOpen, check } = useCheck();

    return (
        <div className={'Dropdown'}>
            <div onClick={check}>{text}</div>
            <ul className={'Dropdown__list ' + classIsOpen}>
                {items && items.map((elem) => (<li><a href="12">{elem}</a></li>))}
            </ul>
        </div>
    );
}

export default Dropdown;