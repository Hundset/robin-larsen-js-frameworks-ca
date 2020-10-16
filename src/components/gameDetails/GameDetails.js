import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { ApiUrl } from "../constants/ApiUrl";
import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

function GameDetails() {
    const [info, setInfo] = useState({});

    let { id } = useParams();

    console.log("id", id);

    const url = ApiUrl + "/" + id;

    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then(json => setInfo(json))
            .catch(error => console.log(error))
    }, []);
    
    return (
        <Card className="cardspecific">
            <Card.Body>
                <Card.Title>{info.name}</Card.Title>
                <Card.Img src={info.background_image} />
                <div>
                <h5>Description:</h5>
                { ReactHtmlParser(info.description) }
                </div>
                <h6>Metrics:</h6>
                <div className="cardspecific--metrics">
                    <ul>
                        <li>Average Rating: {info.rating}</li>
                        <li>Top rating: {info.rating_top}</li>
                        <li>Times rated: {info.ratings_count}</li>
                        <li>Metacritic score: {info.metacritic}</li>
                    </ul>
                </div>
                <h6>Website: </h6>  
                <b><a href={ ReactHtmlParser(info.website) } target="_blank" rel="noopener noreferrer">{info.website}</a></b>
            </Card.Body>
        </Card>
    );
}

export default GameDetails;