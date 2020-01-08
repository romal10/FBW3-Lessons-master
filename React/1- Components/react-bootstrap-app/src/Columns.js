import React from 'react'
import {Col,Alert} from 'react-bootstrap'

export default function Columns(props) {

    let output = [];

    for (let index = 0; index < props.number; index++) {
        let randomtheme = Math.floor(Math.random()*props.themes.length);

        output.push(
            <Col key={index}>
                <Alert variant={props.themes[randomtheme]}>
                    This is an Alert with theme {props.themes[randomtheme]}!
                </Alert>
            </Col>
        )
    }

    return (output)
}
