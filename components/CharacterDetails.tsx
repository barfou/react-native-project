import * as React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

type CharacterDetails = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    created: string;
};

const CharacterDetails = ({character}: { character: CharacterDetails }) => {
    return (
        <View style={styles.characterContainer}>
            <Image style={{width: 100, height: 100}} source={{uri: character.image}}/>
            <Text>Name: {character.name}</Text>
            <Text>Status : {character.status}</Text>
            <Text>Species : {character.species}</Text>
            <Text>Gender : {character.gender}</Text>
            <Text>Created : {character.created}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    characterContainer: {
        backgroundColor: '#E0E0E0',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
});

export default CharacterDetails
