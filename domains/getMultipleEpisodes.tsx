import * as React from 'react';

type Episode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    url: string;
    created: string;
};

const getMultipleEpisodes = (idList: string) =>
    fetch(`https://rickandmortyapi.com/api/episode/${idList}`, {
        headers: {Accept: 'application/json'},
    }).then<Array<Episode>>(res => {
        return res.json();
    });

export default getMultipleEpisodes;