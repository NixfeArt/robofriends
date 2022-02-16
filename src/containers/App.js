import React, { Component } from "react";
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import ErrorBoundry  from "../components/ErrorBoundry";
import SearchBox from '../components/SearchBox';
import './App.css';

class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(responese => responese.json())
        .then(users => this.setState({ robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render(){
        //using destructuring we make a const that is equal to this.state and then we use just robots.filter or searchfield.toLowerCase() instead of this.state.robots etc..
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        //  if (!robots.length) easier way to do this is like this.. since 0 is equal to false and we need true using Negation on False will be true 

        // and more simple way is to use ternary operation instead of longer if
        /*
        return !robots.length ?
            <h1>Loading!</h1> :
            (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
            );
        }
        */
        if (robots.length === 0){
            return <h1>Loading!</h1>
        } else {
            return(
                <div className="tc">
                    <h1 className="f1">SuperHeroes</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots={filteredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    }
}

export default App;