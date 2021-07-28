import React from 'react';

import GenreForm from '../GenreForm';

const CreateGenre = () => {
    return (
        <div className='m1-5'>
            <div className='primaryColor text-title intro-x'>
                Create New Genre
            </div>


            <div className='row'>
                <GenreForm />
            </div>
            
        </div>
    );
};

export default CreateGenre;
