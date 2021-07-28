import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router';
import GameForm from '../GameForm';
import { UrlBackEnd } from '../../../Constants/oidc-config';
import Endpoints from '../../../Constants/endpoints';

export default function Update() {

    const [game, setGame] = useState(undefined);
    const { state } = useLocation();
    const { existGame } = state;

    useEffect(() => {
        if (existGame) {
            setGame({
                id: existGame.id,
                name: existGame.name,
                price: existGame.price,
                description: existGame.description,
                coverImage: UrlBackEnd + Endpoints.coverImage + existGame.coverImage,
                backGroundImage: UrlBackEnd + Endpoints.backGroundImage + existGame.backGroundImage,
                genreName: existGame.genreName,
                createDate: existGame.createDate,
                updateDate: existGame.updateDate
            });
        }
    }, [existGame]);

    return (
        <div className='ml-5'>
            <div className='primaryColor text-title intro-x'>
                Update Game {existGame?.name}
            </div>

            <div className='row'>
                {
                    game && (
                        <GameForm
                            initialGameForm={game}
                        />
                    )
                }
            </div>
        </div>
    )
}
