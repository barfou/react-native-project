import * as React from 'react';

type Origin = {
    name: string;
    url: string;
};

type Location = {
    name: string;
    url: string;
};

type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    episode: [string];
    created: string;
    url: string;
};

const getCharacter = (url: string) =>
    fetch(url, {
        headers: {Accept: 'application/json'},
    }).then<Character>(res => {
        if (!res.ok) {
            throw new Error();
        }
        return res.json();
    });

export default getCharacter;
