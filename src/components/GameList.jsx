import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Game } from './Game'

import '../pages/Home.css'

export class GameList extends Component {
    static propTypes = {
        games: PropTypes.array
    }
    render () {
        const { games } = this.props
        return (
          <div className='Home__results'>
            {
              games.map(game => {
                return (
                  <div key={game.ID} className='GamesList-item'>
                    <Game
                      ID={game.ID}
                      titulo={game.titulo}
                      genero={game.genero}
                      descripcion={game.descripcion}
                    />
                  </div>
                )
              })
            }
          </div>
        )
      }
}