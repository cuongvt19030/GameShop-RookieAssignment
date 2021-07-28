import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router';
import GenreForm from '../GenreForm';

const UpdateGenre = () => {
    const [genre, setGenre] = useState(undefined);
    const {state} = useLocation();
    const { existGenre } = state;

    useEffect(() => {
        if (existGenre) {
            setGenre({
                id: existGenre.id,
                name: existGenre.name,
                createDate: existGenre.createDate,
                updateDate: existGenre.updateDate
            });
        }
    }, [existGenre]);

    return (
        <div className='ml-5'>
            <div className='primaryColor text-title intro-x'>
                Update Genre {existGenre?.name}
            </div>

            <div className='row'>
                {
                    genre && (<GenreForm 
                    initialGenreForm={genre}
                    />)
                }
            </div>
        </div>
    )
};

export default UpdateGenre;