import { lazy } from "react"
import React from 'react'
import { Route, Switch } from "react-router";

import { GAME, CREATE_GAME, EDIT_GAME } from "../../Constants/pages"

//const CreateGame = lazy(() => import("./Create"));
const ListGame = lazy(() => import("./List"));
//const UpdateGame = lazy(() => import("./Update"));

export default function index() {
    return (
        <div>
            <Switch>
                <Route exact path={GAME}>
                    <ListGame />
                </Route>
                {/* <Route exact path={CREATE_GAME}>
                <CreateGame />
            </Route>
            <Route exact path={EDIT_GAME}>
                <UpdateGame />
            </Route> */}
            </Switch>
        </div>
    )
}
