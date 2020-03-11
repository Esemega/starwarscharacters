import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from './Scroll';
import 'tachyons';

class App  extends Component {
    constructor(){
        super();
        this.state = { 
            people: 
            {
                results: []
            },
            searchfield: '' 
        };
    }

    async componentDidMount () {
        const response = await fetch ('https://swapi.co/api/people');
        const people = await response.json();
        this.setState({ people: people });
    }

    onSearchChange = (event) =>{
        this.setState({ searchfield: event.target.value})
    }

    render() {
        const {people, searchfield} = this.state;
        const results = people.results;
        console.log(people);
        console.log(results.length);
        const filteredPeople = results.filter(result =>{
            return result.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return !results.length ?
            <h1 className='f1 tc'>Loading ...</h1> : 
            (
                <div className ='tc'>
                    <h1 className ='f1'>STAR WARS</h1>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList results ={ filteredPeople }/>  
                    </Scroll>
                </div> 
            );
        
    }
}

export default App;