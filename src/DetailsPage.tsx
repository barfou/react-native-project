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

type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    created: string;
};

const DetailsPage = ({route}) => {
    const {itemId} = route.params;

    const [character, setCharacter] = React.useState<Character>();
    const [error, setError] = React.useState(false);

    React.useEffect(() => {
        if (itemId) {
            getCharacter(itemId)
                .then(data => {
                    setCharacter(data);
                })
                .catch(() => {
                    setError(true);
                });
        }
    }, [itemId]);

    return itemId && !error ? (
        <>
            <StatusBar barStyle="dark-content"/>
            <View style={styles.body}>
                <Text>Character Details Screen</Text>
                {character ? (
                    <CharacterDetails character={character}/>
                ) : (
                    <Text>No character detail</Text>
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
    header: {
        backgroundColor: '#E9E9E9',
        padding: 10,
    },
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    body: {
        alignItems: 'center',
        marginTop: 10,
    },
    button: {
        width: 150,
        height: 30,
        margin: 5,
        backgroundColor: '#A5A4AA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    characterContainer: {
        backgroundColor: '#E0E0E0',
        margin: 10,
        padding: 10,
        borderRadius: 10,
    },
});

export default DetailsPage;
