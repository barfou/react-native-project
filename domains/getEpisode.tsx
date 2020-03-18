import * as React from 'react';

type Episode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[]
    url: string;
    created: string;
};


const getEpisode = (url: string) =>
    fetch(url, {
        headers: {Accept: 'application/json'},
    }).then<Episode>(res => {
        if (!res.ok) {
            throw new Error();
        }
        return res.json();
    });

export default getEpisode;
