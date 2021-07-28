import React from 'react';
import { Jumbotron } from 'reactstrap';

export default function index() {
    return (
        <>
            <div>
                <Jumbotron style={{ textAlignVertical: "center", textAlign: "center", }}>
                    <h1 className="display-3">Admin Site of Game Shop</h1>
                </Jumbotron>
            </div>
        </>
    )
}
