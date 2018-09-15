import React, { Component } from 'react';
import logo from '../resources/logo.svg';
import '../styles/App.css';

class Author extends Component {
    
    constructor(props)
    {
        super(props);
    }
    
  render() {
    return (
        <div>
            <label>name: {this.props.name}</label>
            <label>age: {this.props.age}</label>
            <label>genre: {this.props.genre}</label>
        </div>
    );
  }
}

export default Author;