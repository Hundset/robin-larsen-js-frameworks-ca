import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { ApiUrl } from "../constants/ApiUrl";
import { useParams } from "react-router-dom";

function GameDetails() {
    const [info, setInfo] = useState(null);

    let { id } = useParams();

    const url = ApiUrl + id;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setInfo(json))
            .catch(error => console.log(error))
    });

    return (
        <Row>
            <Col>
                <Image src={info.background_image} />
            </Col>
            <Col>
                <h1>{info.name}</h1>
            </Col>
        </Row>
    );
}

export default GameDetails;