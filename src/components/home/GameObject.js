import React from "react"; 
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function GameObject({ id, name, background_image, rating, released }) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Img src={background_image} />
                <h5>Rating: {rating}</h5>
                <h5>Released: {released}</h5>
                <Link to={"games/" + id}>
                    <Button variant="info" block>
                        More info
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default GameObject;