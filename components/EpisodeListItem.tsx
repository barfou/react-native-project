import * as React from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Episode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[];
    url: string;
    created: string;
};

export type CharacterListItemProps = {
    episode: Episode;
    onItemClick: () => void;
}

const EpisodeListItem: React.FC<CharacterListItemProps> = props => {
    return (
        <TouchableOpacity style={styles.item} onPress={props.onItemClick}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.episode.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 4,
        marginHorizontal: 8,
    },
    titleContainer: {
        backgroundColor: '#222222',
        padding: 10,
        opacity: 0.75,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    title: {
        fontSize: 12,
        alignSelf: 'center',
        color: '#FFFFFF'
    },
});

export default EpisodeListItem;
