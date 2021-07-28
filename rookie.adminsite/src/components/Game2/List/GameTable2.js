import React, { useState } from 'react'
import { PencilFill, XCircle } from 'react-bootstrap-icons';
import ButtonIcon from '../../../shared-components/ButtonIcon';
import Table from '../../../shared-components/Table';
import { useHistory } from 'react-router';
import { EDIT_GAME_ID, EDIT_GENRE_ID } from '../../../Constants/pages';


const columns = [
    { columnName: "id", columnValue: "Id" },
    { columnName: "name", columnValue: "Name" },
    { columnName: "price", columnValue: "Price" },
    { columnName: "description", columnValue: "Description" },
    { columnName: "coverImage", columnValue: "CoverImage" },
    { columnName: "backgroundImage", columnValue: "BackgroundImage" },
    { columnName: "genreId", columnValue: "GenreID" },
    { columnName: "genreName", columnValue: "GenreName" },
    { columnName: "createDate", columnValue: "CreateDate" },
    { columnName: "updateDate", columnValue: "UpdateDate" }
]

export default function GameTable({
    games,
    handlePage,
    handleSort,
    sortState,
    fetchDate
}) {
    const [showDetail, setShowDetail] = useState(false);
    const [gameDetail, setGameDetail] = useState(null);
    const [disableState, setDisable] = useState({
        isOpen: false,
        id: 0,
        title: '',
        message: '',
        isDisable: true,
    });

    const history = useHistory();
    const handlEdit = (id) => {
        const existGame = games?.items.find(item => item.id === Number(id));
        history.push(
            EDIT_GENRE_ID(id),
            {
                existGame: existGame
            }
        );
    };

    return (
        <>
            <Table
                columns={columns}
                handleSort={handleSort}
                sortState={sortState}
                page={{
                    currentPage: games?.currentPage,
                    totalPage: games?.totalPages,
                    handleChange: handlePage,
                }}
            >
                {games && games.item.map((data, index) => (
                    <tr key={index}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.price}</td>
                        <td>{data.description}</td>
                        <td>{data.coverImage}</td>
                        <td>{data.backgroundImage}</td>
                        <td>{data.genreId}</td>
                        <td>{data.genreName}</td>
                        <td>{new Date(data.createDate).toLocaleString}</td>
                        <td>{new Date(data.updateDate).toLocaleString}</td>
                        <td className="d-flex">
                            <ButtonIcon /*onClick={() => handleEdit(data.id)}*/>
                                <PencilFill className="text-black"/>
                            </ButtonIcon>
                            <ButtonIcon>
                                <XCircle className="text-danger mx-2" />
                            </ButtonIcon>
                        </td>
                    </tr>
                ))}
            </Table>
        </>
    )
}
