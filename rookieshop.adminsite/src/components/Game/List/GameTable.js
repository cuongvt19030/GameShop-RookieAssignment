import React, { useState } from "react";
import { PencilFill, XCircle } from "react-bootstrap-icons";
import { useHistory } from 'react-router';
import ButtonIcon from "../../../shared-components/ButtonIcon";
import { NotificationManager } from "react-notifications";

import Table, { SortType } from "../../../shared-components/Table";
import Info from "../Info";
import { EDIT_GAME_ID } from "../../../Constants/pages";
import ConfirmModal from "../../../shared-components/ConfirmModal";
import { DisableGameRequest } from "../services/request";
import { 
  Multiplayer,
  Adventure,
  Shooting,
  HackandSlash,
  BattleRoyale,
  AllGenre,
  MultiplayerLabel,
  AdventureLabel,
  ShootingLabel,
  HackandSlashLabel,
  BattleRoyaleLabel,
  AllGenreLabel 
} from "../../../Constants/Game/GameConstants";

const columns= [
  { columnName: "id", columnValue: "Id" },
  { columnName: "name", columnValue: "Name" },
  { columnName: "price", columnValue: "Price" },
  { columnName: "description", columnValue: "Description" },
  { columnName: "genreId", columnValue: "GenreID" },
  { columnName: "genreName", columnValue: "GenreName" },
  { columnName: "createDate", columnValue: "CreateDate" },
  { columnName: "updateDate", columnValue: "UpdateDate" }
];

const GameTable = ({
  games,
  handlePage,
  handleSort,
  sortState,
  fetchData,
}) => {
  const [showDetail, setShowDetail] = useState(false);
  const [gameDetail, setGameDetail] = useState(null);
  const [disableState, setDisable] = useState({
    isOpen: false,
    id: 0,
    title: '',
    message: '',
    isDisable: true,
  });

  const handleShowInfo = (id) => {
    const game = games?.items.find((item) => item.id === id);

    if (game) {
      setGameDetail(game);
      setShowDetail(true);
    }
  };
/*
  const getBrandTypeName = (id) => {
    return id == LuxuryBrandType ? LuxyryBrandTypeLabel : NormalBrandTypeLabel;
  }
  */

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
        `Remove Game Successful`,
        `Remove Successful`,
        2000,
    );
    } else {
      setDisable({
        ...disableState,
        title: 'Can not disable Game',
        message,
        isDisable: result
      });
    }
  };
    
  const handleConfirmDisable = async () => {
    let isSuccess = await DisableGameRequest(disableState.id);
    if (isSuccess) {
      await handleResult(true, '');
    }
  };

  const handleCloseDetail = () => {
    setShowDetail(false);
  };

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
        {games && games?.items?.map((game, index) => (
          <tr key={index} className="" onClick={() => handleShowInfo(game.id)}>
            <td>{game.id}</td>
            <td>{game.name}</td>
            <td>{game.price}</td>
            <td>{game.descrtiption}</td>
            <td>{game.genreId}</td>
            <td>{game.genreName}</td>
            <td>{game.createDate}</td>
            <td>{game.updateDate}</td>

            <td className="d-flex">
              <ButtonIcon onClick={() => handleEdit(game.id)}>
                <PencilFill className="text-black" />
              </ButtonIcon>
              <ButtonIcon onClick={() => handleShowDisable(game.id)}>
                <XCircle className="text-danger mx-2" />
              </ButtonIcon>
            </td>
          </tr>
        ))}
      </Table>
      {gameDetail && showDetail && (
        <Info game={gameDetail} handleClose={handleCloseDetail} />
      )}
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
