import * as React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from "react-native";

type Origin = {
    name: string;
    url: string;
};

type Location = {
    name: string;
    url: string;
};

type CharacterDetails = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: Origin;
    location: Location;
    image: string;
    created: string;
};

const {height, width} = Dimensions.get('window');
const imgWidth = width;
const itemHeight = height / 2;

const CharacterDetails = ({character}: { character: CharacterDetails }) => {
    return (
        <View style={styles.body}>
            <View>
                <Image style={styles.img} source={{uri: character.image}}/>
                <View style={styles.firstInfosContainer}>
                    <Text style={styles.textFirstInfosName}>{character.name}</Text>
                    <Text style={styles.textFirstInfos}>Id: {character.id}</Text>
                    <Text style={styles.textFirstInfos}>Created : {character.created}</Text>
                </View>
            </View>
            <View style={styles.infosContainer}>
                <View style={styles.containerWithBottomline}>
                    <Text style={styles.textLeft}>Status :</Text>
                    <Text style={styles.textRight}>{character.status}</Text>
                </View>
                <View style={styles.containerWithBottomline}>
                    <Text style={styles.textLeft}>Species :</Text>
                    <Text style={styles.textRight}>{character.species}</Text>
                </View>
                <View style={styles.containerWithBottomline}>
                    <Text style={styles.textLeft}>Gender :</Text>
                    <Text style={styles.textRight}>{character.gender}</Text>
                </View>
                <View style={styles.containerWithBottomline}>
                    <Text style={styles.textLeft}>Origin :</Text>
                    <Text style={styles.textRight}>{character.origin.name}</Text>
                </View>
                <View style={styles.containerWithBottomline}>
                    <Text style={styles.textLeft}>Last Location :</Text>
                    <Text style={styles.textRight}>{character.location.name}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#222222',
        flex: 1
    },
    img: {
        width: imgWidth,
        height: itemHeight,
    },
    firstInfosContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#222222',
        padding: 10,
        opacity: 0.75,
    },
    infosContainer: {
        backgroundColor: '#222222',
        padding: 10,
        height: itemHeight
    },
    textFirstInfosName: {
        color: '#DDDDDD',
        fontSize: 24
    },
    textFirstInfos: {
        color: '#DDDDDD',
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
    }
});

export default CharacterDetails
