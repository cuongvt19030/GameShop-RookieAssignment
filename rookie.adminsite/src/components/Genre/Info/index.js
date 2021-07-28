import React from 'react'
import { Modal } from 'reactstrap';

const Info = ({ genre, handleClose }) => {
    return (
        <>
            <Modal
                show={true}
                onHide={handleClose}
                dialogClassName="modal-90w"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="login-modal">
                        Detailed Genre Information
                    </Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <div className='row -intro-y'>
                            <div className='col-4'>Id:</div>
                            <div>{genre.id}</div>
                        </div>
                        <div className='row -intro-y'>
                            <div className='col-4'>Name:</div>
                            <div>{genre.name}</div>
                        </div>
                        <div className='row -intro-y'>
                            <div className='col-4'>Create Date:</div>
                            <div>{genre.createDate}</div>
                        </div>
                        <div className='row -intro-y'>
                            <div className='col-4'>Update Date:</div>
                            <div>{genre.updateDate}</div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Info;