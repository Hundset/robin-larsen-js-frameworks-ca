import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

export default function FilterSearch({ handleSearch }) {
    return (
        <InputGroup className="searchbar">
            <FormControl
                placeholder="Search"
                onChange={event => handleSearch(event)}
            />
        </InputGroup>
    );
}