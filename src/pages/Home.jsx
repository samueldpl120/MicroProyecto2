import React, { Component } from 'react'

import  { SearchForm }  from '../components/SearchForm'
import  { GameList } from '../components/GameList'

import './Home.css'

export class Home extends Component {
    state = { usedSearch: false, results: [] }

    _handleResults = results => {
        this.setState({ results,  usedSearch: true})
    }

    __renderResults() {
        return this.state.results.length === 0
        ? <p>NO SE LOGRÓ ENCONTRAR LO QUE SE ESTABA BUSCANDO</p>
        : <GameList games={this.state.results}/>
    }

    render() {
        return (
            <section className="Home">
                <div className="Home__container">
                    <div className="Home__form">
                        <SearchForm onResults={this._handleResults}/>
                    </div>
                    <div className="Home__description">
                        {this.state.usedSearch
                            ? this.__renderResults()
                            : <h6> EN ESTE LUGAR SE PUEDEN BUSCAR LOS MEJORES VIDEOJUEGOS DEL MERCADO </h6>
                        }
                    </div>
                </div>
            </section>
        )
    }
}