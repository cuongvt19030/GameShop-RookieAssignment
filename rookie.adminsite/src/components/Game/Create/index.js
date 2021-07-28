import React from 'react'
import GameForm from '../GameForm'

export default function index() {
    return (
        <div className='m1-5'>
            <div className='primaryColor text-title intro-x'>
                <h4>Create New Game</h4>
            </div>


            <div className='row'>
                <GameForm />
            </div>

        </div>
    )
}
