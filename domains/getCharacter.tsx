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

const getCharacter = (id: number | string) =>
    fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        headers: {Accept: 'application/json'},
    }).then<Character>(res => {
        if (!res.ok) {
            throw new Error();
        }
        return res.json();
    });

export default getCharacter;
