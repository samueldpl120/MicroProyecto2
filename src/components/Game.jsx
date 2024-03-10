import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import '../pages/Home.css'

export class Game extends Component {
    static propTypes = {
        ID: PropTypes.number,
        titulo: PropTypes.string,
        genero: PropTypes.string,
        descripcion: PropTypes.string
    }
    render() {
        const { ID, titulo, genero, descripcion} = this.props
        return (
            <Link to={`/GameDetail/${ID}`} className="Home__game">
                <img src={descripcion} alt={titlulo} className="Home__gameImg" />
                <img src={descripcion} alt={titulo} className="Home__gameImg Home__gameImg_blured" />
                <div className="Home__gameContent">
                <h3 className="Home__gameContent-titulo">{titulo}</h3>
                <p className="Home__gameContent-genero">{genero}</p>
                </div>
            </Link>
        )
    }
}