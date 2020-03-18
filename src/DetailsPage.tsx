import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    SafeAreaView,
    FlatList, ScrollView,
} from 'react-native';


import getCharacter from '../domains/getCharacter';

import CharacterDetails from '../components/CharacterDetails'
import getMultipleEpisodes from "../domains/getMultipleEpisodes";
import getCharacters from "../domains/getCharacters";
import EpisodeListItem from "../components/EpisodeListItem";

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
    episode: string[];
    created: string;
    url: string;
};

type Episode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    url: string;
    created: string;
};


// @ts-ignore
const DetailsPage = ({navigation, route}) => {
    const {characterURL} = route.params;

    const [character, setCharacter] = React.useState<Character>();
    const [error, setError] = React.useState(false);

    const [episodes, setEpisodes] = React.useState<Array<Episode>>([]);

    React.useEffect(() => {
        if (characterURL) {
            getCharacter(characterURL)
                .then(data => {
                    setCharacter(data);

                    getMultipleEpisodes(data.episode.map(item => item.split("/")[item.split("/").length-1]).toString())
                        .then(episodeData => {
                            setEpisodes(episodes.concat(episodeData));
                        }
                    )

                })
                .catch(() => {
                    setError(true);
                });
        }
    }, [characterURL]);

    return characterURL && !error ? (
        <>
            <StatusBar barStyle="dark-content"/>
            <ScrollView style={styles.body}>
                {character ? (
                    <>
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
                        <Text style={{color: '#DDDDDD', margin: 10 ,paddingLeft: 10}}>Episodes : </Text>
                        <FlatList
                            data={episodes}
                            renderItem={({ item }: {item: Episode}) => (
                                <EpisodeListItem episode={item}/>
                            )}
                        />
                    </>
                ) : (
                    <Text>Getting infos, please wait...</Text>
                )}
            </ScrollView>
        </>
    ) : (
        <View style={styles.body}>
            <Text>Error</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#202329',
        flex: 1,
    },
    flatList: {
        margin: 10,
        flex: 1
    },
});

export default DetailsPage;
