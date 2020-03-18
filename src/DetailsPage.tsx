import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity, Image,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

import getCharacter from '../domains/getCharacter';

import CharacterDetails from '../components/CharacterDetails'

type Origin = {
    name: string;
    url: string;
};

type Location = {
    name: string;
    url: string;
};

type Character = {
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

// @ts-ignore
const DetailsPage = ({navigation, route}) => {
    const {characterURL} = route.params;

    const [character, setCharacter] = React.useState<Character>();
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        if (characterURL) {
            getCharacter(characterURL)
                .then(data => {
                    setCharacter(data);
                })
                .catch(() => {
                    setError(true);
                });
        }
    }, [characterURL]);

    return characterURL && !error ? (
        <>
            <StatusBar barStyle="dark-content"/>
            <View style={styles.body}>
                {character ? (
                    <CharacterDetails
                        character={character}
                        onOriginClick={() => {
                            /* 1. Navigate to the Details route with params */
                            navigation.navigate('LocationDetails', {
                                locationURL: `${character?.origin.url}`
                            });
                        }}
                        onLocationClick={() => {
                            /* 1. Navigate to the Details route with params */
                            navigation.navigate('LocationDetails', {
                                locationURL: `${character?.location.url}`
                            });
                        }}
                    />
                ) : (
                    <Text>Getting infos, please wait...</Text>
                )}
            </View>
        </>
    ) : (
        <View style={styles.body}>
            <Text>Error</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        alignItems: 'center',
        flex: 1
    },
});

export default DetailsPage;
