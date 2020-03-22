import * as React from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from "react-native";

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
    episode: string[]
    created: string;
    url: string;
};

const {height, width} = Dimensions.get('window');
const imgWidth = width;
const itemHeight = height / 2;

export type CharacterDetailsProps = {
    character: CharacterDetails;
    onLocationClick: () => void;
    onOriginClick: () => void;
}


const CharacterDetails: React.FC<CharacterDetailsProps> = CharacterDetailsProps => {
    const createdDate: Date = new Date(CharacterDetailsProps.character.created.split("T")[0]);
    const createdTabString: String[] = createdDate.toDateString().split(" ");
    const createdString: String = createdTabString[1] + " " +  createdTabString[2] + ", " + createdTabString[3]
    return (
        <View>
            <View>
                <Image style={styles.img} source={{uri: CharacterDetailsProps.character.image}}/>
                <View style={styles.firstInfosContainer}>
                    <Text style={styles.textFirstInfosName}>{CharacterDetailsProps.character.name}</Text>
                    <Text style={styles.textFirstInfos}>Id: {CharacterDetailsProps.character.id}</Text>
                    <Text style={styles.textFirstInfos}>Created : {createdString}</Text>
                </View>
            </View>
            <View style={styles.infosContainer}>
                <View style={styles.containerWithBottomline}>
                    <Text style={styles.textLeft}>Status :</Text>
                    <Text style={styles.textRight}>{CharacterDetailsProps.character.status}</Text>
                </View>
                <View style={styles.containerWithBottomline}>
                    <Text style={styles.textLeft}>Species :</Text>
                    <Text style={styles.textRight}>{CharacterDetailsProps.character.species}</Text>
                </View>
                <View style={styles.containerWithBottomline}>
                    <Text style={styles.textLeft}>Gender :</Text>
                    <Text style={styles.textRight}>{CharacterDetailsProps.character.gender}</Text>
                </View>
                <View style={styles.containerWithBottomline}>
                    <Text style={styles.textLeft}>Origin :</Text>
                    {CharacterDetailsProps.character.origin.url ? (
                        <TouchableOpacity onPress={CharacterDetailsProps.onOriginClick}>
                            <Text style={styles.textRightClickable}>{CharacterDetailsProps.character.origin.name}</Text>
                        </TouchableOpacity>
                    ) : (
                        <Text style={styles.textRight}>{CharacterDetailsProps.character.origin.name}</Text>
                    )}
                </View>
                <View style={styles.containerWithBottomline}>
                    <Text style={styles.textLeft}>Last Location :</Text>
                    {CharacterDetailsProps.character.location.url ? (
                        <TouchableOpacity onPress={CharacterDetailsProps.onLocationClick}>
                            <Text style={styles.textRightClickable}>{CharacterDetailsProps.character.location.name}</Text>
                        </TouchableOpacity>
                    ) : (
                        <Text style={styles.textRight}>{CharacterDetailsProps.character.location.name}</Text>
                    )}

                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
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
        flex: 1
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
    textRightClickable: {
        color: '#ff9800',
        textDecorationLine: 'underline'
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
