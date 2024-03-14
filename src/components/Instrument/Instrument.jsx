import React from "react";


export default function Instrument(props) {
    return (
        <li>
            <p>
                {/* eslint-disable-next-line react/prop-types */}
                <strong>{props.title}</strong> {props.description}
            </p>
        </li>
    )
}