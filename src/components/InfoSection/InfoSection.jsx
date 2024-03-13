import React from 'react'
import {data} from '/src/data.js'
import {Container} from "reactstrap";
import "./InfoSection.css"
import Instr from '../../assets/images/instruments.jpg'


export default function InfoSection() {
    return (
        <section>
            <Container>
                <h3>
                    <span>Режущие инструменты и металлорежущие станки</span>
                </h3>
                <div className="content-wrapper">
                    <div className="terms">
                        <span>
                            <strong style={{color: '#596b65'}}>Металлорежущие инструменты</strong>. К металлорежущему инструменту (МРИ) относится любой инструмент,
                            предназначенный для работ с произвольными видами металла, в ходе которых происходит изменение формы заготовки,
                            ее размеров, появляются отверстия, пропилы и выборки, меняется в заданных параметрах поверхность металла.
                            Ассортимент современных видов МРИ, предназначенного для промышленного (станочный) и ручного применения,
                            чрезвычайно широк и включает десятки линеек, внутри каждой может быть более сотни отдельных позиций.
                            Инструменты по способу и области их использования делятся на ручные и машинные, слесарные, токарные, для деревообработки и так далее.
                        </span>
                        <img src={Instr} style={{width: 250, height: 200}}/>
                    </div>
                    <div className="instruments-class">
                        <p>
                            <strong>
                                Классификация металлорежущих инструментов
                            </strong>
                        </p>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    )
}