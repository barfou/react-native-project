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
            <View>
                <Text style={styles.textLeft}>Episode :</Text>
                <Text style={styles.textLeft}>Title :</Text>

            </View>
            <View>
                <Text style={styles.textRight}>{props.episode.episode}</Text>
                <Text style={styles.textRight}>{props.episode.name}</Text>
            </View>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 4,
        marginHorizontal: 8,
        padding: 10,
        backgroundColor: '#30333a',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 8
    },
    textLeft: {
        color: '#DDDDDD',
    },
    textRight: {
        color: '#ff9800',
        alignSelf: 'flex-end'
    },
});

export default EpisodeListItem;
