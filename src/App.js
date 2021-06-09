import React from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state={
     monsters:[],
     searchField:''
    };
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(response =>response.json())
    .then(users => this.setState({monsters:users})
    );
  }

  render(){
    const {monsters,searchField} = this.state;
    const filteredMonster = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
  return (
    <div className="App">
      <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handlechange={e => {this.setState({searchField:e.target.value})}}
        />
       <CardList monsters={filteredMonster}/>
    </div>
  );
  }
}

export default App;
