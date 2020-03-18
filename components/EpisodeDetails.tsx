import * as React from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, View} from "react-native";
import CharacterListItem from "./CharacterListItem";

type Episode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[]
    url: string;
    created: string;
};

export type EpisodeDetailsProps = {
    episode: Episode;
}

const EpisodeDetails: React.FC<EpisodeDetailsProps> = props => {
    return (
        <View style={styles.infosContainer}>
            <View style={styles.containerWithBottomline}>
                <Text style={styles.textLeft}>Episode :</Text>
                <Text style={styles.textRight}>{props.episode.episode}</Text>
            </View>
            <View style={styles.containerWithBottomline}>
                <Text style={styles.textLeft}>Title :</Text>
                <Text style={styles.textRight}>{props.episode.name}</Text>
            </View>
            <View style={styles.containerWithBottomline}>
                <Text style={styles.textLeft}>Date :</Text>
                <Text style={styles.textRight}>{props.episode.air_date}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    infosContainer: {
        padding: 10,
    },
    textLeft: {
        color: '#DDDDDD',
    },
    textRight: {
        color: '#ff9800',
    },
    containerWithBottomline: {
        borderBottomColor: '#DDDDDD',
        borderBottomWidth: 1,
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

export default EpisodeDetails
