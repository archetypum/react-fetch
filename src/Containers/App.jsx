import React from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from "../Components/Scroll"
import './App.css';

class App extends React.Component {
    constructor() {
        super()

        this.state = {
            robots: [],
            searchField: ""
        }

        this
            .onSearchChange
            .bind(this);
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => this.setState({robots: users}))
    }

    onSearchChange = (e) => {
        this.setState({searchField: e.target.value});
    }

    render() {
        const {robots, searchField} = this.state;

        const filteredRobots = robots.filter(robot => {
            return robot
                .name
                .toLowerCase()
                .includes(searchField.toLowerCase());
        });
        return !robots.length
            ? (
                <div className="tc">
                    <h1>Loading...</h1>
                </div>
            )
            : (
                <div className="tc">
                    <h1 className="f1">Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            )
    }
}

export default App;