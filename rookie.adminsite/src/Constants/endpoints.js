const Endpoints = {
    authorize: 'api/authorize',
    me: 'api/authorize/me',
    
    genres: '/api/genres/all',
    genreCreate: '/api/genres',
    genreId: (id) => `api/genres/${id}`,

    games: '/api/games',
    gameCreate: '/api/games',
    gameId: (id) => `api/games/${id}`,

    coverImage: '/images/covers/',
    backGroundImage: '/images/backgrounds/'
};

export default Endpoints;