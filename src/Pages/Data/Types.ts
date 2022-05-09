export type Origin = {
    name: string,
    url: string,
};

export type Location = {
    name: string,
    url: string,
};

export type Character = {
    id: number,
    name: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: Origin,
    location: Location,
    image: string,
    episode: string[],
    url: string,
    created: string
};

export type Episode = {
    id: number,
    name: string,
    // eslint-disable-next-line camelcase
    air_date: string,
    episode: string,
    characters: string[],
    url: string,
    created: string
}

export default {};
