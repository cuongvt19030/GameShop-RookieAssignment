import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { getGenresRequest } from '../services/request'
import GenreTable from './GenreTable';


export default function ListGenres() {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        async function fetchDataAsync() {
            let result = await getGenresRequest();
            setGenres(result.data)
        }
        fetchDataAsync();
    }, [genres]);

    const fetchDataCallbackAsync = async () => {
        let result = await getGenresRequest();
        console.log('fetchDataCallbackAsync');
        console.log(result.data);
        setGenres(result.data);
    };

    return (
        <>
            <div className="primaryColor text-title intro-x"><h1>Genres List</h1></div>
            <div>
                <div className="d-flex align-items-center ml-3">
                    <Link to="/genre/create" type="button" className="btn btn-danger">
                        <h3>Create a new Genre</h3>
                    </Link>
                </div>
                <GenreTable genres={genres} fetchData={fetchDataCallbackAsync}
                ></GenreTable>
            </div>
        </>
    )
}
