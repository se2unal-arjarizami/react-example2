import React, { Component } from 'react';
import '../styles/App.css';
import Author from './Author';
import axios from 'axios';

class DogsList extends Component {

    constructor(props){
        super(props);
        this.state = {
            dogs: [],
        };
    }
    componentDidMount(){
        var _this = this;
        axios({
            method:'get',
            url:'https://dog.ceo/api/breeds/list/all',
        })
        .then(function(response) {
        
            console.log(response);
            _this.setState({
               dogs: response.data.message
            });
        })
        .catch(function (error) {
        console.log(error);
        
        });
    }
    render() {
        
        //const domAuthors = this.state.authors.map((author) => {
        //<Author name={author.name} age={author.age} genre={author.genre}/>
        //})

        //return (<div>{allNames}</div>)
  
        
        const dogs = this.state.dogs;
        var contentKeys = Object.keys(dogs);
        
        
        var allNames = contentKeys.map((t) => 
                       dogs[t].map((e) => (<h2 className='MyItem'>{t + ": " + e}</h2>))
                       );
        return (
            <div className='MyList'>
                {console.log(dogs)}
                <div>{allNames}</div>
            </div>
        );
    }
}

export default DogsList;