import * as React from 'react';

type Character = {
    id: number;
    name: string;
    image: string;
    url: string;
};

const getMultipleCharacters = (idList: string) =>
    fetch(`https://rickandmortyapi.com/api/character/${idList}`, {
        headers: {Accept: 'application/json'},
    }).then<Array<Character>>(res => {
        return res.json();
    });

export default getMultipleCharacters;