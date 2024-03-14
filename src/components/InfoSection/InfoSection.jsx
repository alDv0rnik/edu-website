import React from 'react'
import {data, instruments, producers, titles} from '/src/data.js'
import {Container} from "reactstrap";
import "./InfoSection.css"
import Instr from '../../assets/images/instruments.jpg'
import Metal from '../../assets/images/metallorez.jpg'
import Instrument from "../Instrument/Instrument.jsx";
import Button from "../Button/Button.jsx";
import {useNavigate} from "react-router-dom";
import {PATHS} from "../../constants.js";


function Title(props) {
    return (
        <p style={{marginTop: 15}}>
            <strong>
                {/* eslint-disable-next-line react/prop-types */}
                {props.title}
            </strong>
        </p>
    )
}

export default function InfoSection() {
    const navigate = useNavigate();

    function onQuiz () {
        navigate(`${PATHS.TEST}`);
    }

    return (
        <section>
            <Container>
                <h3>
                    <span>Режущие инструменты и металлорежущие станки</span>
                </h3>
                <div className="content-wrapper">
                    <div className="content">
                        <span>
                            <strong>Металлорежущие инструменты</strong>. К металлорежущему инструменту (МРИ) относится любой инструмент,
                            предназначенный для работ с произвольными видами металла, в ходе которых происходит изменение формы заготовки,
                            ее размеров, появляются отверстия, пропилы и выборки, меняется в заданных параметрах поверхность металла.
                            Ассортимент современных видов МРИ, предназначенного для промышленного (станочный) и ручного применения,
                            чрезвычайно широк и включает десятки линеек, внутри каждой может быть более сотни отдельных позиций.
                            Инструменты по способу и области их использования делятся на ручные и машинные, слесарные, токарные, для деревообработки и так далее.
                        </span>
                        <img src={Instr} style={{width: 250, height: 200}}/>
                    </div>

                    <Title title={titles[0].title}/>
                    <div className="content">
                        <ul>
                            <Instrument
                                title={data[0].title}
                                description={data[0].description}
                            />
                            <Instrument
                                title={data[1].title}
                                description={data[1].description}
                            />
                        </ul>
                    </div>
                    <Title title={titles[1].title}/>
                    <div className="content">
                        <ul>
                            <Instrument
                                title={instruments[0].title}
                                description={instruments[0].description}
                            />
                            <Instrument
                                title={instruments[1].title}
                                description={instruments[1].description}
                            />
                            <Instrument
                                title={instruments[2].title}
                                description={instruments[2].description}
                            />
                            <Instrument
                                title={instruments[3].title}
                                description={instruments[4].description}
                            />
                            <Instrument
                                title={instruments[4].title}
                                description={instruments[4].description}
                            />
                        </ul>
                    </div>
                    <Title title={titles[2].title}/>
                    <div className="content">
                        <span>
                            Несмотря на существование множества групп и разновидностей, строение инструмента для резания металла идентичное.
                            Он состоит из двух частей: <strong><u>рабочей</u> </strong>и <strong><u>крепёжной</u></strong>.
                            На рабочей половине располагается режущая часть для срезания части металла и зачастую – калибрующая.
                            Она служит для восстановления режущих элементов при переточке, для направления инструмента в процессе резания и
                            окончательного оформления обрабатываемой поверхности.
                        </span>
                        <img src={Metal} style={{width: 250, height: 200}}/>
                    </div>
                    <div className="content">
                        <span>
                            Крепёжная часть необходима для закрепления металлорежущего инструмента на станках, в машинах или удержания в руках.
                            Жёсткая фиксация крепежной части в определенном положении противодействует усилию резания в процессе работы.
                            В зависимости от исполнения крепёжной части различают вставной металлорежущий инструмент (с хвостовиками и державками)
                            и насадной (с отверстием для фиксации на оправке).
                        </span>
                    </div>
                    <Title title={producers[0].title}/>
                    <div className="content">
                        <span>
                            {producers[0].description}
                        </span>
                    </div>
                    <p></p>
                    <div className='btn-container'>
                        <p className='mb-2 d-flex align-items-center gap-2'></p>
                        <Button
                            onClick={() => onQuiz()}>Пройти тест
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}