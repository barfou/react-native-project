import * as React from "react";
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet, Text,
} from "react-native";
import { SearchBar } from 'react-native-elements';

import getCharacters from "../domains/getCharacters";
import CharacterListItem from "../components/CharacterListItem";

type Info = {
    count: number;
    pages: number;
    next: string;
    prev: string;
};

type Character = {
    id: number;
    name: string;
    image: string;
    url: string;
};

// @ts-ignore
const HomePage = ({navigation}) => {
    const [info, setInfo] = React.useState<Info>();
    const [characters, setCharacters] = React.useState<Array<Character>>([]);
    const [page, setPage] = React.useState(1);
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        let cancel = false;
        getCharacters(search, page)
            .then(data => {
                if (!cancel) {
                    setInfo(data.info);
                    setCharacters(characters?.concat(data.results));
                }
            });
        return () => {
            cancel = true
        }
    }, [search, page]);

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={styles.body}>
                <SearchBar
                    onChangeText = {str => {
                        setSearch(str), setPage(1), setCharacters([]);
                    }}
                    value = {search}
                    placeholder = "Type here..."
                />
                {
                characters && info ? (
                    <FlatList
                        style={styles.flatList}
                        onEndReached={() => {
                            {
                                if(info?.next != "") {
                                    setPage(page + 1);
                                }
                            }
                        }}
                        onEndReachedThreshold={0.8}
                        data={characters}
                        renderItem={({item}: { item: Character }) => (
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
                        numColumns={2}
                        horizontal={false}
                    />
                ) : (
                    <Text style={styles.message}>Sorry no characters for this search...</Text>
                )}
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#202329',
        flex: 1,
    },
    flatList: {
        margin: 10,
    },
    message: {
        color: 'white',
        alignSelf: 'center'
    }
});

export default HomePage;
