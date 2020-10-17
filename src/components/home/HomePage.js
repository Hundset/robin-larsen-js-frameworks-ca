import React, { useState, useEffect } from "react";
import { ApiUrl } from "../constants/ApiUrl";
import GameObject from "./GameObject";
import FilterSearch from "./FilterSearch";

export function HomePage() {
    const [games, setGames] = useState([]);
    const [searchedGames, setSearchedGames] = useState([]);

    useEffect(() => {
        fetch(ApiUrl)
            .then(response => response.json())
            .then(json => {
                console.log(json.results);
                setGames(json.results);
                setSearchedGames(json.results);
            })
            .catch(error => console.log(error));
    }, []);

    const searchGames = function(e) {
        const searchVal = e.target.value.toLowerCase();

        const resultArray = games.filter(function(vidya) {
            const lowerCaseName = vidya.name.toLowerCase();

            if (lowerCaseName.includes(searchVal)) {
                return true;
            }
            return false;
        });

        setSearchedGames(resultArray);
    };

    return (
    <>
        <h1>Home</h1>

        <FilterSearch handleSearch={searchGames} />

        <ul>
            {searchedGames.map(game => {
                const { id, name, background_image, rating, released } = game;

                return (
                    <GameObject key={id} id={id} name={name} background_image={background_image} rating={rating} released={released} />
                );
            })}
        </ul>
    </>
    );
}

export default HomePage;