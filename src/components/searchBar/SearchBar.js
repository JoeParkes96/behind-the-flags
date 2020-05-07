import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
    }

    render() {
        return (
            <div>
                Search Bar
            </div>
        );
    }
}

export default SearchBar;