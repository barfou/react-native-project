import * as React from 'react';

type Location = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: [string];
    created: string;
};


const getLocation = (url: string) =>
    fetch(url, {
        headers: {Accept: 'application/json'},
    }).then<Location>(res => {
        if (!res.ok) {
            throw new Error();
        }
        return res.json();
    });

export default getLocation;
