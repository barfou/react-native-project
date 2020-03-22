import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image, FlatList, ScrollView,
} from 'react-native';

import getLocation from "../domains/getLocation";

import LocationDetails from "../components/LocationDetails";
import CharacterListItem from "../components/CharacterListItem";
import getCharacter from "../domains/getCharacter";
import getMultipleEpisodes from "../domains/getMultipleEpisodes";
import getMultipleCharacters from "../domains/getMultipleCharacters";
import getEpisode from "../domains/getEpisode";
import EpisodeDetails from "../components/EpisodeDetails";

type Episode = {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[]
    url: string;
    created: string;
};

type Character = {
    id: number;
    name: string;
    image: string;
    url: string;
};

// @ts-ignore
const DetailsEpisodePage = ({navigation, route}) => {
    const {episodeURL} = route.params;

    const [episode, setEpisode] = React.useState<Episode>();
    const [error, setError] = React.useState(false);

    const [characters, setCharacters] = React.useState<Array<Character>>([]);

    React.useEffect(() => {
        if (episodeURL) {
            getEpisode(episodeURL)
                .then(data => {
                    setEpisode(data);

                    getMultipleCharacters(data.characters.map(item => item.split("/")[item.split("/").length-1]).toString())
                        .then(charactersData => {
                            setCharacters(characters.concat(charactersData));
                            }
                        )

                })
                .catch(() => {
                    setError(true);
                });
        }
    }, [episodeURL]);

    return episodeURL && !error ? (
        <ScrollView style={styles.body}>
            {episode ? (
                <>
                    <EpisodeDetails episode={episode}/>
                    <Text style={{color: '#DDDDDD', margin: 10 ,paddingLeft: 10}}>Characters ({characters.length}) : </Text>
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

export default DetailsEpisodePage;
