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

export type LocationProps = {
    location: Location;
}

const LocationDetails: React.FC<LocationProps> = LocationProps => {
    return (
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

export default LocationDetails
