import React, { useEffect, useState } from 'react'
import { getGamesRequest } from '../services/request';
import { Link } from 'react-router-dom';
import {
    DEFAULT_SORT_COLUMN_NAME,
    DEFAULT_PAGE_LIMIT,
    ACCSENDING,
    DECSENDING
} from '../../../Constants/paging';
import GameTable from './GameTable';

const ListGame = () => {

    const [query, setQuery] = useState({
        page: 1,
        limit: DEFAULT_PAGE_LIMIT,
        sortOrder: ACCSENDING,
        sortColumn: DEFAULT_SORT_COLUMN_NAME
    });

    const handlePage = (page) => {
        setQuery({
            ...query,
            page,
        })
    };

    // const handleSort = (sortColumn) => {
    //     const sortOrder = query.sortOrder === ACCSENDING ? DECSENDING : ACCSENDING;

    //     setQuery({
    //         ...query,
    //         sortColumn,
    //         sortOrder,
    //     });
    // };

    const fetchDataCallbackAsync = async () => {
        let data = await getGamesRequest(query);
        console.log('fetchDataCallbackAsync');
        console.log(data);
        setGames(data);
    }

    const [games, setGames] = useState("");

    useEffect(() => {
        async function fetchDataAsync() {
            let result = await getGamesRequest(query);
            setGames(result.data);
        }

        fetchDataAsync();
    }, [query, games]);

    return (
        <>
            <div className="primaryColor text-title intro-x"><h1>Game List</h1></div>

            <div>
                <div className="d-flex mb-5 intro-x">
                    <div className="d-flex align-items-center ml-3">
                        <Link to="/game/create" type="button" className="btn btn-danger">
                            <h3>Create new Game</h3>
                        </Link>
                    </div>
                </div>
                <GameTable
                    games={games}
                    handlePage={handlePage}
                    fetchData={fetchDataCallbackAsync}
                    //handleSort={handleSort}
                    // sortState={{
                    //     columnValue: query.sortColumn,
                    //     orderBy: query.sortOrder,
                    // }}
                />
            </div>
        </>
    );
};
export default ListGame;