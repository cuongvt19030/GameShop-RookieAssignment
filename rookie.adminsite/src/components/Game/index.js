import React, { lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { GAME, EDIT_GAME, CREATE_GAME } from '../../Constants/pages'

const List = lazy(() => import('./List'));
const Update = lazy(() => import('./Update'));
const Create = lazy(() => import('./Create'));

export default function index() {
    return (
        <div>
            <Switch>
                <Route exact path={GAME}>
                    <List/>
                </Route>
                <Route exact path={EDIT_GAME}>
                    <Update/>
                </Route>
                <Route exact path={CREATE_GAME}>
                    <Create/>
                </Route>
            </Switch>
        </div>
    )
}
