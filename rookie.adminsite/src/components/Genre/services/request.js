import Endpoints from "../../../Constants/endpoints";
import RequestService from "../../../services/request";

export function getGenresRequest(){
    return RequestService.axios.get(Endpoints.genres);
}

export function updateGenresRequest(genreForm) {
    const formData = new FormData();

    Object.keys(genreForm).forEach(key => {
        formData.append(key, genreForm[key]);
    });

    return RequestService.axios.put(Endpoints.genreId(genreForm.id ?? - 1), formData);
}

export function  createGenresRequest(genreForm) {
    const formData = new FormData();

    Object.keys(genreForm).forEach(key => {
        formData.append(key, genreForm[key]);
    });

    return RequestService.axios.post(Endpoints.genreCreate, formData);
}

export function disableGenreRequest(genreId) {
    return RequestService.axios.delete(Endpoints.genreId(genreId));
}