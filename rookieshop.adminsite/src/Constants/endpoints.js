const Endpoints = {
    authorize: 'api/authorize',
    me: 'api/authorize/me',
    
    game: '/api/games',
    gameId: (id) => `api/games/${id}`,

    genre: '/api/genres',
    genreId: (id) => `api/genres/${id}`,

};

export default Endpoints;
