import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image, FlatList,
} from 'react-native';

import getLocation from "../domains/getLocation";

import LocationDetails from "../components/LocationDetails";
import CharacterList from "../components/CharacterList";
import getCharacter from "../domains/getCharacter";

type Location = {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: [string];
    created: string;
};

type Character = {
    id: number;
    name: string;
    image: string;
    url: string;
};

// @ts-ignore
const DetailsLocationPage = ({navigation, route}) => {
    const {locationURL} = route.params;

    const [location, setLocation] = React.useState<Location>();
    const [error, setError] = React.useState(false);

    const [characters, setCharacters] = React.useState<Array<Character>>([]);
    const [table] = React.useState<Array<Character>>([]);

    React.useEffect(() => {
        if (locationURL) {
            getLocation(locationURL)
                .then(data => {
                    setLocation(data);
                })
                .catch(() => {
                    setError(true);
                });
        }
    }, [locationURL]);

    return locationURL && !error ? (
        <View style={styles.body}>
            {location ? (
                <LocationDetails
                    location={location}
                />
            ) : (
                <Text style={{alignSelf: 'center'}}>Getting infos, please wait...</Text>
            )}
        </View>
    ) : (
        <View style={styles.body}>
            <Text>Error</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        flex: 1
    },
    flatList: {
        margin: 10,
    },
});

export default DetailsLocationPage;
