import React, {Component} from 'react';
import './style.css';

class Movie extends Component {
    constructor(props){
        super(props);
        this.state = {
            movie: []
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params;
        let url = `https://sujeitoprogramador.com/r-api/?api=filmes/${id}`;
        fetch(url)
        .then((res) => res.json())
        .then((json) => {
            this.setState({movie: json});
            console.log(json)
        })
    }

    render(){
        return(
            <div className="info-movie">
                <h1>{this.state.movie.nome}</h1>
                {this.state.movie.length !== 0 && //Carrega somente se a state movie tiver algum conteudo.
                <img src={this.state.movie.foto} alt='movie cover' />}
                
                {this.state.movie.length !== 0 && 
                <h3>Synopsis</h3>}
                <p>{this.state.movie.sinopse}</p> 
            </div>
        );
    }
}

export default Movie;