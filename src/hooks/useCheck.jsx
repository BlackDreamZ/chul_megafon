import { useState, useEffect } from 'react';

export const useCheck = () => {
    const width = window.innerWidth;
    let readyOpen;
    if (width <= 999) {
        readyOpen = false;
    } else {
        readyOpen = true;
    }
    const [isOpen, setIsOpen] = useState(readyOpen, true);
    const classIsOpen = isOpen ? 'Dropdown__list_open' : 'Dropdown__list_close';

    const check = () => {
        const width = window.innerWidth;
        if (width <= 999) {
            setIsOpen(!isOpen);
        } else {
            setIsOpen(true);
        }
    }

    const checkResize = () => {
        const width = window.innerWidth;
        if (width <= 999) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', checkResize);

        return () => {
            window.removeEventListener('resize', checkResize);
        }
    }, [])

    return { classIsOpen, check };
}

export default useCheck;