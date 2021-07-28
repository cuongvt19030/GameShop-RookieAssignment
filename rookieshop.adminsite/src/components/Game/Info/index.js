import React from "react";
import { Modal } from "react-bootstrap";

const Info = ({ game, handleClose }) => {
//  const getBrandTypeName = (id) => {
//    return id == LuxuryBrandType ? LuxyryBrandTypeLabel : NormalBrandTypeLabel;
//  }

  return (
    <>
      <Modal
        show={true}
        onHide={handleClose}
        dialogClassName="modal-90w"
      >
        <Modal.Header closeButton>
          <Modal.Title id="login-modal">
            Detailed Game Infomation
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <div className='row -intro-y'>
              <div className='col-4'>Id:</div>
              <div>{game.id}</div>
            </div>

            <div className='row -intro-y'>
              <div className='col-4'>Name:</div>
              <div>{game.name}</div>
            </div>

            <div className='row -intro-y'>
              <div className='col-4'>Genre Name:</div>
              <div>{game.genreName}</div>
            </div>

            <div className='row -intro-y'>
              <div className='col-4'>Image:</div>
              <div>
                <img src={game.coverImage} className='object-center w-full rounded-md' />
              </div>
            </div>

            <div className='row -intro-y'>
              <div className='col-4'>Image:</div>
              <div>
                <img src={game.backGroundImage} className='object-center w-full rounded-md' />
              </div>
            </div>

          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Info;