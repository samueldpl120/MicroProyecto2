import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link} from 'react-router-dom'
import './GameDetail.css'

///const API_KEY = 'f5bc629a' Se debe sustituir por la base de datos


export class GameDetail extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
            isExact: PropTypes.bool,
            path: PropTypes.string,
            url: PropTypes.string
        })
    }

    state = { game: {} }

    _fetchGame({ ID }) {
        fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${ID}`)
            .then(res => res.json())
            .then(game => {
                console.log({ game })
                this.setState({ game })
            })
    }

    componentDidMount() {
        console.log(this.props)
        const { GameId } = this.props.match.params
        this._fetchGame({ ID: GameId })
    }

    render() {
        const {
            ID,
            Titulo, 
            Genero, 
            Descripcion
        } = this.state.game
        return (
            <div className="GameDetail">
            <div className="GameDetail__card">
            <div className="GameDetail__column GameDetail__column_img">
            </div>
            <div className="GameDetail__column GameDetail__description">
                <h2 className="GameDetail__title title">{Titulo}</h2>
                
                <p>
                <strong>ID:</strong>
                <br/>
                {ID}
                </p>
                <p>
                <strong>TÍTULO:</strong>
                <br/>
                {Titulo}
                </p>
                <p>
                <strong>GÉNERO:</strong>
                <br/>
                {Genero}
                </p>
                <p>
                <strong>DESCRIPCIÓN:</strong>
                <br/>
                {Descripcion}
                </p>
                <div className="GameDetail__footer">
                    <Link 
                        className="GameDetail__btn" 
                        to='/' 
                    >
                        VOLVER AL INICIO
                    </Link>
                </div>
            </div>
            </div>
        </div>
        )
    }
}