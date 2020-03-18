import * as React from 'react';
import {Dimensions, FlatList, Image, StyleSheet, Text, View} from "react-native";
import CharacterListItem from "./CharacterListItem";

type Location = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: [string];
    created: string;
};

const {height, width} = Dimensions.get('window');
const imgWidth = width;
const itemHeight = height / 2;

export type LocationProps = {
    location: Location;
}

const LocationDetails: React.FC<LocationProps> = LocationProps => {
    return (
        <View style={styles.body}>
            <View style={styles.infosContainer}>
                <View style={styles.containerWithBottomline}>
                    <Text style={styles.textLeft}>Name :</Text>
                    <Text style={styles.textRight}>{LocationProps.location.name}</Text>
                </View>
                <View style={styles.containerWithBottomline}>
                    <Text style={styles.textLeft}>Type :</Text>
                    <Text style={styles.textRight}>{LocationProps.location.type}</Text>
                </View>
                <View style={styles.containerWithBottomline}>
                    <Text style={styles.textLeft}>Dimension :</Text>
                    <Text style={styles.textRight}>{LocationProps.location.dimension}</Text>
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
    },
    flatList: {
        margin: 10,
    },
});

export default LocationDetails
