import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { ApiUrl } from "../constants/ApiUrl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

function GameDetails() {
    const [detail, setDetail] = useState(null);

    let { id } = useParams();

    const url = ApiUrl + id;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setDetail(json.results))
            .catch(error => console.log(error))
    });

    return (
        <Container fluid>
            <Row>
                <Col md={8}>
                    <h1>{detail.name}</h1>
                    <Image src={detail.background_image}/>
                </Col>
                <Col md={8}>
                </Col>
            </Row>
        </Container>
    );
}

export default GameDetails;