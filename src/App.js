import React, { Component } from "react";
import CardList from "./CardList";
import { robots } from "./robots";
import SearchBox from "./SearchBox";

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: robots,
            searchfield: ""
        };
    }

    // we want "searchfield" state to reflect what we type into the searchbox
    onSearchChange = event => {
        this.setState({ searchfield: event.target.value });
    };


    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name
                .toLocaleLowerCase()
                .includes(this.state.searchfield.toLocaleLowerCase());
        });

        return (
            <div className="tc">
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots} />
            </div>
        );
    }
}

export default App;
