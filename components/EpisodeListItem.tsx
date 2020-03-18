import * as React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Episode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    url: string;
    created: string;
};

export type EpisodeistItemProps = {
    episode: Episode;
    //onItemClick: () => void;
}

const EpisodeListItem: React.FC<EpisodeistItemProps> = props => {
    return (
        <TouchableOpacity style={styles.item}>
                <Text style={styles.title}>{props.episode.name}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 4,
        marginHorizontal: 8,
        padding: 10,
        backgroundColor: '#ff9800'
    },
    title: {
        fontSize: 12,
        alignSelf: 'center',
        color: '#FFFFFF'
    },
});

export default EpisodeListItem;
