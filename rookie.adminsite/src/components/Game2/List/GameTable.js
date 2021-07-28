import React, { useState } from "react";
import { PencilFill, XCircle } from "react-bootstrap-icons";
import ButtonIcon from "../../../shared-components/ButtonIcon";
//import { NotificationManager } from 'react-notifications';

import Table from "../../../shared-components/Table";
//import Info from "../Info";
import { EDIT_GAME_ID } from "../../../Constants/pages";
//import ConfirmModal from "../../../shared-components/ConfirmModal";

//import { DisableBrandRequest } from "../services/request"

const columns = [
    { columnName: "id", columnValue: "Id" },
    { columnName: "name", columnValue: "Name" },
    { columnName: "price", columnValue: "Price" },
    { columnName: "description", columnValue: "Description" },
    { columnName: "coverImage", columnValue: "CoverImage" },
    { columnName: "backgroundImage", columnValue: "BackgroundImage" },
    //{ columnName: "genreId", columnValue: "GenreID" },
    { columnName: "genreName", columnValue: "GenreName" },
    { columnName: "createDate", columnValue: "CreateDate" },
    { columnName: "updateDate", columnValue: "UpdateDate" }
];

const GenreTable = ({
    games,
    handlePage,
    handleSort,
    sortState,
    fetchData,
}) => {
    //   const [showDetail, setShowDetail] = useState(false);
    //   const [brandDetail, setBrandDetail] = useState(null);
    //   const [disableState, setDisable] = useState({
    //     isOpen: false,
    //     id: 0,
    //     title: '',
    //     message: '',
    //     isDisable: true,
    //   });

    //   const handleShowInfo = (id) => {
    //     const brand = brands?.items.find((item) => item.id === id);

    //     if (brand) {
    //       setBrandDetail(brand);
    //       setShowDetail(true);
    //     }
    //   };

    //   const getBrandTypeName = (id) => {
    //     return id == LuxuryBrandType ? LuxyryBrandTypeLabel : NormalBrandTypeLabel;
    //   }

    //   const handleShowDisable = async (id) => {
    //     setDisable({
    //       id,
    //       isOpen: true,
    //       title: 'Are you sure',
    //       message: 'Do you want to disable this Brand?',
    //       isDisable: true,
    //     });
    //   };

    // const handleCloseDisable = () => {
    //     setDisable({
    //         isOpen: false,
    //         id: 0,
    //         title: '',
    //         message: '',
    //         isDisable: true,
    //     });
    // };

    //   const handleResult = async (result, message) => {
    //     if (result) {
    //       handleCloseDisable();
    //       await fetchData();
    //       NotificationManager.success(
    //         `Remove Brand Successful`,
    //         `Remove Successful`,
    //         2000,
    //     );
    //     } else {
    //       setDisable({
    //         ...disableState,
    //         title: 'Can not disable Brand',
    //         message,
    //         isDisable: result
    //       });
    //     }
    //   };

    //   const handleConfirmDisable = async () => {
    //     let isSuccess = await DisableBrandRequest(disableState.id);
    //     if (isSuccess) {
    //       await handleResult(true, '');
    //     }
    //   };

    //   const handleCloseDetail = () => {
    //     setShowDetail(false);
    //   };

    // const history = useHistory();
    // const handleEdit = (id) => {
    //     const existBrand = brands?.items.find(item => item.id === Number(id));
    //     history.push(
    //         EDIT_BRAND_ID(id),
    //         {
    //             existBrand: existBrand
    //         }
    //     );
    // };

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
                {games && games?.item.map((data, index) => (
                    <tr key={index}>
                        <td>{data.id}</td>
                        <td>{data.name}</td>
                        <td>{data.price}</td>
                        <td>{data.description}</td>
                        <td>{data.coverImage}</td>
                        <td>{data.backgroundImage}</td>
                        {/* <td>{data.genreId}</td> */}
                        <td>{data.genreName}</td>
                        <td>{new Date(data.createDate).toLocaleString}</td>
                        <td>{new Date(data.updateDate).toLocaleString}</td>

                        <td className="d-flex">
                            <ButtonIcon>
                                <PencilFill className="text-black" />
                            </ButtonIcon>
                            <ButtonIcon>
                                <XCircle className="text-danger mx-2" />
                            </ButtonIcon>
                        </td>
                    </tr>
                ))}
            </Table>
        </>
    );
};

export default GenreTable;
