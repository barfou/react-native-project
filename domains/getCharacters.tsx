import * as React from 'react';

type Info = {
    count: number;
    pages: number;
    next: string;
    prev: string;
};

type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    created: string;
};

type Characters = {
    info: Info;
    results: Array<Character>;
};

const getCharacters = (page: number | string) =>
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`, {
        headers: {Accept: 'application/json'},
    }).then<Characters>(res => {
        if (!res.ok) {
            throw new Error();
        }
        return res.json();
    });

export default getCharacters;
