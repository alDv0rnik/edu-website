import React, {useRef} from 'react'
import {Container} from 'reactstrap'
import "./header.css"
import {BASE_URL, PATHS} from "/src/constants.js";



const navLinks = [
    {
        dispaly: 'Главная',
        url: BASE_URL + PATHS["HOME"],
    },
    {
        dispaly: 'Материалы',
        url: BASE_URL + PATHS["CONTENT"]
    },
    {
        dispaly: 'Тесты',
        url: BASE_URL + PATHS["TEST"]
    },
]


const Header = () => {

    const menuRef = useRef();

    const menuToggle = () => menuRef.current.classList.toggle('active_menu')

    return (
        <header className="header">
            <Container>
                <div className='navigation d-flex align-items-center justify-content-between'>
                    <div className='nav d-flex align-items-center gap-5'>
                        <div className='nav_menu' ref={menuRef} onClick={menuToggle}>
                            <ul className='nav_list'>
                                {
                                    navLinks.map((item, index) => (
                                        <li key={index} className='nav_item'>
                                            <a href={item.url}>{item.dispaly}</a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>

                    <div className='mobile_menu'>
                        <span><i className='ri-menu-line' onClick={menuToggle}></i></span>
                    </div>

                </div>
            </Container>
        </header>
    )
}

export default Header