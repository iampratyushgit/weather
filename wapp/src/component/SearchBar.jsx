import React, { useState } from 'react';

function SearchBar({ onSearch }) {
    const [Input, setInput] = useState("");

    const handleSubmit = () => {
        onSearch(Input);
    };

    const handleInputChange = (e) => {
        setInput(e.target.value);
        console.log("onchange", e.target.value);
    };


    return (
        <form className="search-bar">
            <input
                type="text"
                placeholder="Search your place..."
                value={Input}
                onChange={handleInputChange}
            />
            <button type="button" onClick={handleSubmit}>Search</button>
        </form>
    );
}


export default SearchBar;