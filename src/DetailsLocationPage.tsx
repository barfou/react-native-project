import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image, FlatList, ScrollView, Dimensions,
} from 'react-native';

import getLocation from "../domains/getLocation";

import LocationDetails from "../components/LocationDetails";
import CharacterListItem from "../components/CharacterListItem";
import getCharacter from "../domains/getCharacter";
import getMultipleEpisodes from "../domains/getMultipleEpisodes";
import getMultipleCharacters from "../domains/getMultipleCharacters";

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

const {height, width} = Dimensions.get('window');

// @ts-ignore
const DetailsLocationPage = ({navigation, route}) => {
    const {locationURL} = route.params;

    const [location, setLocation] = React.useState<Location>();
    const [error, setError] = React.useState(false);

    const [characters, setCharacters] = React.useState<Array<Character>>([]);

    React.useEffect(() => {
        if (locationURL) {
            getLocation(locationURL)
                .then(data => {
                    setLocation(data);

                    getMultipleCharacters(data.residents.map(item => item.split("/")[item.split("/").length-1]).toString())
                        .then(charactersData => {
                            setCharacters(characters.concat(charactersData));
                            }
                        )

                })
                .catch(() => {
                    setError(true);
                });
        }
    }, [locationURL]);

    return locationURL && !error ? (
        <ScrollView style={styles.body}>
            {location ? (
                <>
                    <LocationDetails location={location}/>
                    <Text style={{color: '#DDDDDD', margin: 10 ,paddingLeft: 10}}>Residents ({characters.length}) : </Text>
                    <View style={styles.list}>
                        {characters.map(item =>
                            <CharacterListItem
                                key={item.id}
                                character={item}
                                onItemClick={() => {
                                    /* 1. Navigate to the Details route with params */
                                    navigation.navigate('Details', {
                                        characterURL: `${item.url}`
                                    });
                                }}
                            />
                        )}
                    </View>
                </>
            ) : (
                <Text style={styles.message}>Getting infos, please wait...</Text>
            )}
        </ScrollView>
    ) : (
        <View style={styles.body}>
            <Text>Error</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#202329',
        flex: 1
    },
    list: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    message: {
        color: 'white',
        alignSelf: 'center'
    }
});

export default DetailsLocationPage;
