import React from 'react'
import './Board.css'
import { MoreHorizontal } from 'react-feather'
import Card from '../Card/Card'
import Editable from '../Editable/Editable'


function Board() {
    return (
        <div className='board'>
            <div className='board_top'>
                <div className='board_top_title'>To Do <span>2</span>
                    <MoreHorizontal />
                </div>

            </div>
            <div className='board_cards custom-scroll'>
                <Card />
                <Card />
                <Editable
                    displayClass="board_cards_add"
                    text="Add Card"
                    placeholder="Enter Card Title"
                />
            </div>
        </div>
    )
}

export default Board