import { useState, useEffect } from 'react';

export const useCheck = () => {
    const [isOpen, setIsOpen] = useState(false, true);
    const classIsOpen = isOpen ? 'Dropdown__list_open' : 'Dropdown__list_close';

    const check = () => {
        const width = window.innerWidth;
        if (width <= 999) {
            setIsOpen(!isOpen);
        } else {
            setIsOpen(true);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', check);

        return () => {
            window.removeEventListener('resize', check);
        }
    })

    return { classIsOpen, check };
}

export default useCheck;