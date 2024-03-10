import React, { Component } from 'react'
import './SearchForm.css'

///const API_KEY = 'f5bc629a' Se tomaría la información de la base de datos en lugar de una API

export class SearchForm extends Component { 
    state = {
        inputGame: ''
    }
//Se logró implementar este método para realizar la búsqueda de videojuegos pero funciona con una API
    _handleSubmit = e => {
        e.preventDefault()
        const { inputGame } = this.state
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${inputGame}`)
            .then(res => res.json())
            .then(results => {
                console.log(results)
                const { Search = [], totalResults = '0' } = results
                console.log(Search, totalResults)
                this.props.onResults(Search)
                window.sessionStorage.setItem('sessionGames', JSON.stringify(Search))
            })
    }

    _handleChange = e => {
        this.setState({ inputGame: e.target.value})
    }

    render() {
        return(
            <div className="container">
                <form onSubmit={this._handleSubmit}>
                    <div className="SearchForm__inputContainer">
                        <input 
                            className="SearchForm__input" 
                            onChange={this._handleChange}
                            placeholder="Ejemplo: FIFA 22"
                            type="text"
                        />
                        <button className="SearchForm__submit">Buscar</button>
                    </div>
                </form>
            </div>
        )
    }
}