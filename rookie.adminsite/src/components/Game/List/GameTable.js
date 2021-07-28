import React, { useState } from 'react'
import Table from '../../../shared-components/Table';
import ButtonIcon from '../../../shared-components/ButtonIcon';
import { useHistory } from 'react-router';
import { EDIT_GAME_ID } from '../../../Constants/pages';
import { PencilFill, XCircle } from 'react-bootstrap-icons';
import { UrlBackEnd } from '../../../Constants/oidc-config';
import Endpoints from '../../../Constants/endpoints';
import ConfirmModal from '../../../shared-components/ConfirmModal';
import { disableGameRequest } from '../services/request';
import { NotificationManager } from 'react-notifications';

const columns = [
    { columnName: "id", columnValue: "Id" },
    { columnName: "name", columnValue: "Name" },
    { columnName: "price", columnValue: "Price" },
    { columnName: "description", columnValue: "Description" },
    { columnName: "coverImage", columnValue: "CoverImage" },
    { columnName: "backGroundImage", columnValue: "BackGroundImage" },
    { columnName: "genreName", columnValue: "GenreName" },
    { columnName: "createDate", columnValue: "CreateDate" },
    { columnName: "updateDate", columnValue: "UpdateDate" }
];

const GameTable = ({
    games,
    handlePage,
    //handleSort,
    //sortState,
    fetchData,
}) => {

    const [disableState, setDisable] = useState({
        isOpen: false,
        id: 0,
        title: '',
        message: '',
        isDisable: true,
    });

    const history = useHistory();
    const handleEdit = (id) => {
        const existGame = games?.items.find(item => item.id === Number(id));
        history.push(
            EDIT_GAME_ID(id),
            {
                existGame: existGame
            }
        );
    };

    const handleShowDisable = async (id) => {
        setDisable({
            id,
            isOpen: true,
            title: 'Are you sure',
            message: 'Do you want to disable this Game?',
            isDisable: true,
        });
    };

    const handleCloseDisable = () => {
        setDisable({
            isOpen: false,
            id: 0,
            title: '',
            message: '',
            isDisable: true,
        });
    };

    const handleResult = async (result, message) => {
        if (result) {
          handleCloseDisable();
          await fetchData();
          NotificationManager.success(
            `Remove Brand Successful`,
            `Remove Successful`,
            2000,
        );
        } else {
          setDisable({
            ...disableState,
            title: 'Can not disable Brand',
            message,
            isDisable: result
          });
        }
      };

    const handleConfirmDisable = async () => {
        let isSuccess = await disableGameRequest(disableState.id);
        if (isSuccess) {
            await handleResult(true, '');
        }
    };

    return (
        <>
            <Table
                columns={columns}
                //handleSort={handleSort}
                //sortState={sortState}
                page={{
                    currentPage: games?.currentPage,
                    totalPages: games?.totalPages,
                    totalItems: games?.items?.length,
                    handleChange: handlePage,
                }}
            >
                {games ? games.items?.map((data, index) => (
                    <tr key={index}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.price}</td>
                        <td>{data.description}</td>
                        <td><img className="show" src={UrlBackEnd + Endpoints.coverImage + data.coverImage} /></td>
                        <td><img className="show" src={UrlBackEnd + Endpoints.backGroundImage + data.backGroundImage} /></td>
                        <td>{data.genreName}</td>
                        <td>{new Date(data.createDate).toLocaleString()}</td>
                        <td>{new Date(data.updateDate).toLocaleString()}</td>
                        <td className="d-flex">
                            <ButtonIcon onClick={() => handleEdit(data.id)} >
                                <PencilFill className="text-black" />
                            </ButtonIcon>
                        </td>
                        <td className="d-flex">
                            <ButtonIcon onClick={() => handleShowDisable(data.id)} >
                                <XCircle className="text-danger mx-2" />
                            </ButtonIcon>
                        </td>
                    </tr>
                )) : null}
            </Table>

            <ConfirmModal
                title={disableState.title}
                isShow={disableState.isOpen}
                onHide={handleCloseDisable}
            >
                <div>

                    <div className="text-center">
                        {disableState.message}
                    </div>
                    {
                        disableState.isDisable && (
                            <div className="text-center mt-3">
                                <button
                                    className="btn btn-danger mr-3"
                                    onClick={handleConfirmDisable}
                                    type="button"
                                >
                                    Disable
                                </button>

                                <button
                                    className="btn btn-outline-secondary"
                                    onClick={handleCloseDisable}
                                    type="button"
                                >
                                    Cancel
                                </button>
                            </div>
                        )
                    }
                </div>
            </ConfirmModal>
        </>
    );
};

export default GameTable;