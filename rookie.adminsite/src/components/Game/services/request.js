import qs from 'qs';

import RequestService from '../../../services/request';
import Endpoints from '../../../Constants/endpoints';

export function getGamesRequest(query) {
    return RequestService.axios.get(Endpoints.games, {
        params: query,
        paramsSerializer: params => qs.stringify(params),
    });
}

export function updateGameRequest(gameForm) {
    const formData = new FormData();

    Object.keys(gameForm).forEach(key => {
        formData.append(key, gameForm[key]);
    });

    return RequestService.axios.put(Endpoints.gameId(gameForm.id ?? - 1), formData);
}

export function createGameRequest(gameForm){
    const formData = new FormData();

    Object.keys(gameForm).forEach(key => {
        formData.append(key, gameForm[key]);
    });

    return RequestService.axios.post(Endpoints.games, formData);
}

export function disableGameRequest(gameId) {
    return RequestService.axios.delete(Endpoints.gameId(gameId));
}