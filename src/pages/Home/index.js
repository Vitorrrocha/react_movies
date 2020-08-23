import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './style.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        };
    
        this.loadMovies = this.loadMovies.bind(this);
    }
    
    componentDidMount() {
        this.loadMovies();
    }
    
    loadMovies() {
        // url api: https://sujeitoprogramador.com/r-api/?api=filmes
        let url = 'https://sujeitoprogramador.com/r-api/?api=filmes';
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            this.setState({movies: json});
            console.log(json)
        })
    }


    render(){
        return(
            <div className='container'>
                <div className='movies-list'>
                    { this.state.movies.map((movies) => {
                        return(
                            <article key={movies.id} className='movie'>
                                <strong>{movies.nome}</strong>
                                <img src={movies.foto} alt='movie cover'></img>
                                <Link to={`movie/${movies.id}`} >Open</Link>
                            </article>
                        );
                    })}
                </div>
            </div>
        )
    }
}

export default Home;
