import React, { useEffect, useState } from 'react'
import { getGamesRequest } from "../services/request"
import { Link } from 'react-router-dom';
import {
    ACCSENDING,
    DECSENDING,
    DEFAULT_PAGE_LIMIT,
    DEFAULT_SORT_COLUMN_NAME
} from '../../../Constants/paging'
import GameTable from './GameTable';

const ListGame = () => {

    const [query, setQuery] = useState({
        page: 1,
        limit: DEFAULT_PAGE_LIMIT,
        sortOrder: DECSENDING,
        sortColumn: DEFAULT_SORT_COLUMN_NAME,
    });

    const [games, setGames] = useState("");

    const handlePage = (page) => {
        setQuery({
            ...query,
            page,
        });
    };

    const handleSort = (sortColumn) => {
        const sortOrder = query.sortOrder === ACCSENDING ? DECSENDING : ACCSENDING;

        setQuery({
            ...query,
            sortColumn,
            sortOrder
        });
    };

    const fetchDataCallbackAsync = async () => {
        let data = await getGamesRequest(query);
        setGames(data);
    }

    useEffect(() => {
        async function fetchDataAsync(){
            let result = await getGamesRequest(query);
            if(result.data){
                setGames(result.data);
            }
        }

        fetchDataAsync();
    }, [query])
    return (
        <>
            <div className="primaryColor text-title intro-x"><h1>Games List</h1></div>

            <div>
                <div className="d-flex mb-5 intro-x">
                    {/* <div className="d-flex align-items-center w-md mr-5">

                    </div> */}

                    <div className="d-flex align-items-center ml-3">
                        <Link to="/game/create" type="button" className="btn btn-danger">
                            <h3>Create new Brand</h3>
                        </Link>
                    </div>
                </div>
                <GameTable
                    games={games}
                    handlePage={handlePage}
                    handleSort={handleSort}
                    sortState={{
                        columnValue: query.sortColumn,
                        orderBy: query.sortOrder,
                    }}
                    fetchDate={fetchDataCallbackAsync}
                />
            </div>

        </>
    )
};
export default ListGame;
