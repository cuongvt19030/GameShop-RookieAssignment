import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { GENRE, EDIT_GENRE, CREATE_GENRE } from '../../Constants/pages';

const ListGenre = lazy(() => import("./List"));

const Genre = () => {
    return (
        <Switch>
            <Route path={GENRE}>
                <ListGenre />
            </Route>
        </Switch>
    )
};

export default Genre;
