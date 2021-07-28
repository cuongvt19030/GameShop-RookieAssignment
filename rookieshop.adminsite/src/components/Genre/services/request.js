import { AxiosResponse } from "axios";
import qs from 'qs';

import RequestService from '../../../services/request';
import EndPoints from '../../../Constants/endpoints';

export function CreateGenreRequest(gameForm) {
    const formData = new FormData();

    Object.keys(brandForm).forEach(key => {
        formData.append(key, brandForm[key]);
    });

    return RequestService.axios.post(EndPoints.genre, formData);
}

export function GetGenreRequest(query) {
    return RequestService.axios.get(EndPoints.genre, {
        params: query,
        paramsSerializer: params => qs.stringify(params),
    });
}

export function UpdateGenreRequest(gameForm) {
    const formData = new FormData();

    Object.keys(gameForm).forEach(key => {
        formData.append(key, gameForm[key]);
    });

    return RequestService.axios.put(EndPoints.gameId(gameForm.id ?? - 1), formData);
}

export function DisableGenreRequest(gameId) {
    return RequestService.axios.delete(EndPoints.gameId(gameId));
}