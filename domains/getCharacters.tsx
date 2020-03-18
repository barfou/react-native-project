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
    image: string;
    url: string;
};

type Characters = {
    info: Info;
    results: Array<Character>;
};

const getCharacters = (search: string, page: number | string) =>
    fetch(`https://rickandmortyapi.com/api/character/?name=${search}&page=${page}`, {
        headers: {Accept: 'application/json'},
    }).then<Characters>(res => {
        return res.json();
    });

export default getCharacters;
