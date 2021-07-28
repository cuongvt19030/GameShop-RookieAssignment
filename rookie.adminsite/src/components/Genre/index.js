import React, { lazy } from 'react'
import { GENRE, EDIT_GENRE, CREATE_GENRE } from '../../Constants/pages'
import { Switch, Route } from 'react-router'

const ListGenre = lazy(() => import('./List'));
const CreateGenre = lazy(() => import('./Create'));
const UpdateGenre = lazy(() => import('./Update'));

export default function index() {
    return (
        <div>
            <Switch>
                <Route exact path={GENRE}>
                    <ListGenre />
                </Route>
                <Route exact path={EDIT_GENRE}>
                    <UpdateGenre />
                </Route>
                <Route exact path={CREATE_GENRE}>
                    <CreateGenre />
                </Route>
            </Switch>
        </div>
    )
}
