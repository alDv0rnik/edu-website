import React from 'react'
import {data} from '/src/data.js'
import {Container} from "reactstrap";


export default function InfoSection() {
    return (
        <section>
            <Container>
                <h2>
                    <span>{data["title"]}</span>
                </h2>
                <div className="content-wrapper">

                </div>
            </Container>
        </section>
    )
}