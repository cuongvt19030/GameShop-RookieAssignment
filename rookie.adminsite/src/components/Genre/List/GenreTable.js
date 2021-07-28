import React from 'react'
import "./Table.css"
import { useState } from 'react'
import ButtonIcon from '../../../shared-components/ButtonIcon'
import { useHistory } from 'react-router-dom'
import { EDIT_GENRE_ID } from '../../../Constants/pages'
import { PencilFill, XCircle } from "react-bootstrap-icons"
import ConfirmModal from '../../../shared-components/ConfirmModal'
import Info from '../Info'
import { disableGenreRequest } from '../services/request'
import { NotificationManager } from 'react-notifications';
import { Button } from 'reactstrap'



const GenreTable = (props) => {

    const [disableState, setDisable] = useState({
        isOpen: false,
        id: 0,
        title: '',
        message: '',
        isDisable: true,
    });

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
            await props.fetchData();
            NotificationManager.success(
                `Remove Genre Successful`,
                `Remove Successful`,
                2000,
            );
        } else {
            setDisable({
                ...disableState,
                title: 'Can not disable Genre',
                message,
                isDisable: result
            });
        }
    };

    const handleConfirmDisable = async () => {
        let isSuccess = await disableGenreRequest(disableState.id);
        if (isSuccess) {
            await handleResult(true, '');
        }
    }

    const handleShowDisable = async (id) => {
        setDisable({
            id,
            isOpen: true,
            title: 'Are you sure',
            message: 'Do you want to disable this Genre?',
            isDisable: true,
        });
    };

    const history = useHistory();
    const handleEdit = (id) => {
        const existGenre = props.genres?.find(item => item.id === Number(id));
        history.push(
            EDIT_GENRE_ID(id),
            {
                existGenre: existGenre
            }
        );
    };

    return (
        <>
            <div className="table-container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Create Date</th>
                            <th>Update Date</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {props.genres.map((data, index) => (
                            <tr key={index} >
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{new Date(data.createDate).toLocaleString()}</td>
                                <td>{new Date(data.updateDate).toLocaleString()}</td>
                                <td className="d-flex">
                                    <ButtonIcon onClick={() => handleEdit(data.id)}>
                                        <PencilFill className="text-black" />
                                    </ButtonIcon>
                                </td>
                                <td>
                                    <ButtonIcon onClick={() => handleShowDisable(data.id)}>
                                        <XCircle className="text-danger mx-2" />
                                    </ButtonIcon>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
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
                                        type="button">
                                        Disable
                                    </button>
                                    <button
                                        className="btn btn-outline-secondary"
                                        onClick={handleCloseDisable}
                                        type="button">
                                        Cancel
                                    </button>
                                </div>
                            )
                        }
                    </div>
                </ConfirmModal>
            </div>
        </>
    )
}
export default GenreTable;
