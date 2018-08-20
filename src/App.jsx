import React from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox';
import './App.css';

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            robots: robots,
            searchField: ""
        }

        this.onSearchChange.bind(this);
    }

    onSearchChange = (e) => {
        this.setState({searchField: e.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return (
            <div className="tc">
                <h1 className="f1">Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <CardList robots={filteredRobots}/>
            </div>
        )
    }
}

export default App;