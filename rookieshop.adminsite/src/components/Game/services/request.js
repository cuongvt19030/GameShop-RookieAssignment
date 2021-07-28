import { AxiosResponse } from "axios";
import qs from 'qs';

import RequestService from '../../../services/request';
import EndPoints from '../../../Constants/endpoints';

export function CreateGameRequest(gameForm) {
    const formData = new FormData();

    Object.keys(gameForm).forEach(key => {
        formData.append(key, gameForm[key]);
    });

    return RequestService.axios.post(EndPoints.game, formData);
}

export function GetGameRequest(query) {
    return RequestService.axios.get(EndPoints.game, {
        params: query,
        paramsSerializer: params => qs.stringify(params),
    });
}

export function UpdateGameRequest(gameForm) {
    const formData = new FormData();

    Object.keys(gameForm).forEach(key => {
        formData.append(key, gameForm[key]);
    });

    return RequestService.axios.put(EndPoints.gameId(gameForm.id ?? - 1), formData);
}

export function DisableGameRequest(gameId) {
    return RequestService.axios.delete(EndPoints.gameId(gameId));
}