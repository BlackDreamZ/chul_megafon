import './Footer.scss';
import letter from '../../../icons/icon_message.svg';
import six from '../../../icons/icon_six_years.svg';

const Footer = () => {
    return (
        <footer>
            <div className="footer__container container">
                <div className='footer__container-top'>
                    <nav>
                        <ul>Компания
                            <li><a href="12">О компании</a></li>
                            <li><a href="13">Новости</a></li>
                            <li><a href="14">Работа в МегаФоне</a></li>
                            <li><a href="15">Условия оказания услуг</a></li>
                        </ul>
                        <ul>Организациям
                            <li><a href="16">Инвесторам</a></li>
                            <li><a href="17">Партнерам</a></li>
                            <li><a href="18">Прессе</a></li>
                            <li><a href="19">Лицензии</a></li>
                        </ul>
                        <ul>Интересное
                            <li><a href="20">Корпоративные дайджесты</a></li>
                        </ul>
                    </nav>
                    <div className='footer__top-right'>
                        <h6>МегаФон в соцсетях</h6>
                        <div className='icons__media'>
                            <a href='21'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Logo bubble/24/FB" opacity="0.245722">
                                        <g id="asset (5)">
                                            <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M0 12C0 18.64 5.36 24 12 24C18.64 24 24 18.64 24 12C24 5.36 18.64 0 12 0C5.36 0 0 5.36 0 12ZM13 18.52H10.32H10.28V12H8.92V9.76H10.28V8.4C10.28 6.56 11.04 5.48 13.2 5.48H15V7.72H13.88C13.04 7.72 13 8.04 13 8.64V9.76H15.04L14.8 12H13V18.52Z" fill="#333333" />
                                        </g>
                                    </g>
                                </svg>

                            </a>
                            <a href='22'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Combined Shape 2">
                                        <path id="Combined Shape" opacity="0.25" fill-rule="evenodd" clip-rule="evenodd" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24ZM13.6154 6V10.0769H10.3846V6H7V17.5385H10.3846V13.4615H13.6154V17.5385H17V6H13.6154Z" fill="#333333" />
                                    </g>
                                </svg>
                            </a>
                            <a href='23'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Logo bubble/24/Twitter">
                                        <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM18.4736 10.3807C18.4736 14.3836 15.3782 18.9999 9.71755 19C7.97933 19 6.36201 18.4986 5 17.6392C5.2409 17.6672 5.486 17.6811 5.73411 17.6811C7.17622 17.6811 8.50313 17.1971 9.55645 16.3844C8.20943 16.3599 7.07332 15.484 6.68152 14.2803C6.86902 14.3158 7.06192 14.335 7.25992 14.335C7.54072 14.335 7.81283 14.2977 8.07143 14.2283C6.66322 13.9508 5.60241 12.7258 5.60241 11.2587C5.60241 11.2451 5.60241 11.2327 5.60286 11.22C6.01746 11.4471 6.49177 11.5835 6.99667 11.5989C6.17046 11.0561 5.62716 10.1282 5.62716 9.07722C5.62716 8.52233 5.77956 8.00229 6.04386 7.5546C7.56158 9.3876 9.8296 10.5931 12.3874 10.7197C12.3346 10.498 12.3076 10.2667 12.3076 10.029C12.3076 8.35666 13.6858 7 15.3854 7C16.2707 7 17.0702 7.36825 17.6318 7.95711C18.3329 7.82097 18.9914 7.56877 19.586 7.22178C19.3559 7.92905 18.8681 8.52233 18.2327 8.89738C18.8552 8.82414 19.4486 8.66172 20 8.42045C19.5881 9.02791 19.0658 9.56154 18.4649 9.98915C18.4709 10.1191 18.4736 10.2496 18.4736 10.3807Z" fill="#34AAF2" />
                                    </g>
                                </svg>
                            </a>
                            <a href='24'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Logo bubble/24/OK" opacity="0.245722">
                                        <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM16.0873 8.31095C16.0842 10.4142 14.3802 12.1182 12.2763 12.1207V12.1213C10.1731 12.12 8.46846 10.416 8.46538 8.31218C8.46538 6.21016 10.1755 4.5 12.2763 4.5C14.3771 4.5 16.0873 6.21016 16.0873 8.31095ZM16.0319 14.3119C15.3509 14.74 14.6016 15.0501 13.8173 15.2285L15.9489 17.3606C16.3659 17.7925 16.3659 18.4784 15.9489 18.9109C15.5207 19.3544 14.8133 19.3661 14.3703 18.9385L12.2763 16.8433L10.1718 18.9373C9.95961 19.1551 9.67356 19.2633 9.38751 19.2633C9.10207 19.2633 8.81541 19.1551 8.60379 18.9373L8.58534 18.9188C8.15964 18.4839 8.16764 17.7857 8.60256 17.3582L10.7341 15.2266C9.95039 15.0495 9.20173 14.7388 8.52197 14.3113L8.52074 14.31C7.9997 13.9815 7.84345 13.2932 8.17195 12.7721C8.17318 12.7715 8.17318 12.7703 8.17318 12.769C8.50229 12.2492 9.19004 12.093 9.71109 12.4215C11.2798 13.4027 13.2729 13.4027 14.8416 12.4215C15.3528 12.1194 16.0098 12.2683 16.3395 12.7617C16.6828 13.2747 16.545 13.9686 16.0319 14.3119ZM12.2763 6.73366C13.1474 6.73489 13.853 7.4411 13.8536 8.31156C13.8536 9.18263 13.1474 9.88823 12.2763 9.88946C11.4059 9.88823 10.7003 9.18325 10.6984 8.31218C10.6997 7.44049 11.4059 6.73489 12.2763 6.73305V6.73366Z" fill="#333333" />
                                    </g>
                                </svg>
                            </a>
                            <a href='25'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Logo bubble/24/Youtube" opacity="0.245722">
                                        <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM18.7077 8.54411C18.5427 7.93974 18.0806 7.46748 17.4893 7.29881C16.398 7.00001 12.0062 7.00001 12.0062 7.00001C12.0062 7.00001 7.62552 6.99404 6.52319 7.29881C5.93186 7.46748 5.46977 7.93974 5.30474 8.54411C5.09788 9.68594 4.9959 10.845 5.00013 12.0063C4.9967 13.1631 5.09868 14.3178 5.30474 15.4553C5.46977 16.0597 5.93186 16.5319 6.52319 16.7006C7.61326 17 12.0062 17 12.0062 17C12.0062 17 16.3864 17 17.4893 16.7006C18.0806 16.5319 18.5427 16.0597 18.7077 15.4553C18.9095 14.3174 19.0072 13.1627 18.9995 12.0063C19.008 10.8454 18.9103 9.68636 18.7077 8.54411ZM10.6045 14.148V9.858L14.2599 12.0063L10.6045 14.148Z" fill="#333333" />
                                    </g>
                                </svg>
                            </a>
                            <a href='26'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Logo bubble/24/VK" opacity="0.245722">
                                        <g id="vk">
                                            <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM12.1634 16.4369H11.3251L11.3543 16.469C11.3543 16.469 9.50746 16.5781 7.87995 14.8852C6.10311 13.0384 4.53626 9.37093 4.53626 9.37093C4.53626 9.37093 4.44876 9.12593 4.5456 9.01217C4.65001 8.88151 4.94752 8.87217 4.94752 8.87217L6.95128 8.85467C6.95128 8.85467 7.14378 8.88967 7.2762 8.98592C7.38936 9.07343 7.45061 9.22276 7.45061 9.22276C7.45061 9.22276 7.77495 10.0453 8.2037 10.7803C9.04371 12.2246 9.42871 12.5408 9.71746 12.3879C10.1287 12.1622 10.0056 10.3445 10.0056 10.3445C10.0056 10.3445 10.015 9.68534 9.79621 9.39018C9.62996 9.16209 9.31554 9.09443 9.17554 9.07693C9.06996 9.06351 9.25371 8.80159 9.48996 8.68317C9.84988 8.50759 10.4845 8.49359 11.2371 8.50175C11.8227 8.51109 11.9925 8.54551 12.22 8.59859C12.7518 8.72649 12.735 9.13887 12.6989 10.0238C12.6881 10.2891 12.6756 10.597 12.6756 10.9524C12.6756 11.0343 12.6731 11.1217 12.6706 11.2114C12.6578 11.6655 12.6433 12.1806 12.9375 12.371C13.0862 12.476 13.4625 12.3885 14.4092 10.7966C14.8549 10.0435 15.1886 9.15159 15.1886 9.15159C15.1886 9.15159 15.258 8.99292 15.3717 8.92351C15.4855 8.85292 15.643 8.87101 15.643 8.87101L17.7442 8.85292C17.7442 8.85292 18.3823 8.78351 18.4792 9.06351C18.5929 9.36101 18.2423 10.0616 17.3854 11.2079C16.5696 12.2963 16.1729 12.6967 16.2106 13.0508C16.2381 13.309 16.4963 13.5426 16.9911 14.0003C18.0342 14.9701 18.3032 15.4769 18.3639 15.5914C18.3684 15.5998 18.3717 15.6061 18.3742 15.6103C18.8379 16.3809 17.8568 16.4421 17.8568 16.4421L15.9837 16.4678C15.9837 16.4678 15.5817 16.5466 15.0474 16.1796C14.7711 15.99 14.5016 15.6804 14.2446 15.3852C13.8512 14.9333 13.4873 14.5154 13.1743 14.6145C12.6493 14.7796 12.6674 15.9037 12.6674 15.9037C12.6674 15.9037 12.6674 16.1423 12.5449 16.2712C12.416 16.4095 12.1634 16.4369 12.1634 16.4369Z" fill="#333333" />
                                        </g>
                                    </g>
                                </svg>
                            </a>
                            <a href='27'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="Logo bubble/24/Instagram" opacity="0.245722">
                                        <path id="Combined Shape" fill-rule="evenodd" clip-rule="evenodd" d="M24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12ZM8.95569 4.65969C9.74339 4.62462 9.99385 4.61538 12 4.61538C14.0062 4.61538 14.2566 4.62277 15.0443 4.65969C15.8302 4.696 16.3662 4.82031 16.8369 5.00308C17.3237 5.19077 17.7348 5.44431 18.1452 5.85477C18.5551 6.26523 18.8086 6.67754 18.9969 7.16308C19.1791 7.63323 19.3034 8.16985 19.3403 8.95569C19.3754 9.74339 19.3846 9.99385 19.3846 12C19.3846 14.0062 19.3772 14.2566 19.3403 15.0443C19.304 15.8302 19.1791 16.3662 18.9969 16.8369C18.8092 17.3237 18.5551 17.7348 18.1452 18.1452C17.7348 18.5551 17.3218 18.8086 16.8369 18.9969C16.3662 19.1791 15.8302 19.3034 15.0443 19.3403C14.2566 19.3754 14.0062 19.3846 12 19.3846C9.99385 19.3846 9.74339 19.3772 8.95569 19.3403C8.16985 19.304 7.63446 19.1791 7.16308 18.9969C6.67692 18.8092 6.26523 18.5551 5.85477 18.1452C5.44431 17.7348 5.19138 17.3218 5.00308 16.8369C4.82031 16.3662 4.69662 15.8302 4.65969 15.0443C4.62462 14.2566 4.61538 14.0062 4.61538 12C4.61538 9.99385 4.62277 9.74339 4.65969 8.95569C4.696 8.16923 4.82031 7.63385 5.00308 7.16308C5.19077 6.67692 5.44431 6.26523 5.85477 5.85477C6.26523 5.44431 6.67754 5.19138 7.16308 5.00308C7.63385 4.82031 8.16923 4.69662 8.95569 4.65969ZM14.9846 5.98831C14.2062 5.95446 13.9711 5.94462 12 5.94462L11.9723 5.92615C10.0277 5.92615 9.77422 5.9351 9.0177 5.96182L8.98215 5.96308C8.26215 6 7.87385 6.12 7.61538 6.22215C7.26523 6.35077 7.02462 6.51692 6.76677 6.77477C6.50769 7.03385 6.34215 7.27385 6.21292 7.62462C6.11138 7.88308 5.992 8.27938 5.95446 8.99938L5.95288 9.04422C5.92639 9.79391 5.91692 10.062 5.91692 11.9908C5.91692 13.9215 5.92642 14.1871 5.95298 14.9303V14.9303L5.95446 14.9717C5.992 15.6917 6.11138 16.0886 6.21292 16.3471C6.34215 16.6892 6.50769 16.9385 6.76677 17.1963C7.02462 17.4548 7.26523 17.6117 7.61538 17.7495C7.87385 17.8511 8.27077 17.9711 8.99138 18.0086C9.77477 18.0449 10.0055 18.0542 11.9815 18.0542C13.9569 18.0542 14.1877 18.0462 14.9717 18.0111C15.6917 17.9785 16.0886 17.8578 16.3471 17.7569C16.6892 17.6234 16.9385 17.4634 17.1963 17.2055C17.4548 16.9458 17.6117 16.7009 17.7495 16.3551C17.8511 16.0954 17.9711 15.7046 18.0086 14.9846C18.0449 14.2062 18.0542 13.9717 18.0542 12C18.0542 10.0283 18.0462 9.79446 18.0111 9.01538C17.9785 8.29538 17.8578 7.90462 17.7569 7.64492C17.6234 7.29908 17.4634 7.05354 17.2055 6.79508C16.9458 6.53723 16.7009 6.37723 16.3551 6.24369C16.0954 6.14154 15.7046 6.02215 14.9846 5.98831ZM12 8.208C9.90462 8.208 8.208 9.90646 8.208 12C8.208 14.0954 9.90646 15.792 12 15.792C14.0954 15.792 15.792 14.0935 15.792 12C15.792 9.90462 14.0935 8.208 12 8.208ZM9.53846 12C9.53846 13.36 10.64 14.4615 12 14.4615C13.36 14.4615 14.4615 13.36 14.4615 12C14.4615 10.64 13.36 9.53846 12 9.53846C10.64 9.53846 9.53846 10.64 9.53846 12ZM16.8283 8.05846C16.8283 8.54769 16.4308 8.94462 15.9422 8.94462C15.4529 8.94462 15.056 8.54708 15.056 8.05846C15.056 7.56985 15.4535 7.17292 15.9422 7.17292C16.4302 7.17231 16.8283 7.56985 16.8283 8.05846Z" fill="#333333" />
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <div className='message'>
                            <img src={letter} alt='letter' />
                            <p>Знаете, как сделать МегаФон Бизнес лучше? Напишите нам на <a href='@mailto:Feedback.b2b@megafon.ru'>Feedback.b2b@megafon.ru</a></p>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <div className='footer__container-bottom'>
                    <p className='footer__container-bottom-left'>Продолжая использовать наш сайт, вы даете согласие на обработку файлов Cookies и других пользовательских данных, в соответствии с <a href='21'>Политикой конфиденциальности</a>.</p>
                    <div className='footer__container-bottom-right'>
                        <img src={six} alt='six years' />
                        <p>© 2022 ПАО «МегаФон»</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;