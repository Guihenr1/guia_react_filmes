import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './home.css';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filmes: []
        }

        this.loadFilms = this.loadFilms.bind(this);
    }

    componentDidMount() {
        this.loadFilms();
    }

    loadFilms() {
        let url = 'http://sujeitoprogramador.com/r-api/?api=filmes';
        fetch(url)
            .then((r) => r.json())
            .then((json) => {
                this.setState({ filmes: json });
                console.log(json);
            })
    }

    render() {
        return (
            <div className="container">
                <div className="lista-filmes">
                    {this.state.filmes.map((filme) => {
                        return (
                            <article key={filme.id}>
                                <strong>{filme.nome}</strong>
                                <img src={filme.foto} />
                                <Link to="/">Acessar</Link>
                            </article>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Home;