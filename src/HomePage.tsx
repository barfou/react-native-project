import * as React from "react";
import {
    FlatList,
    SafeAreaView,
    StatusBar,
    StyleSheet,
} from "react-native";

import SearchBar from "../components/SearchBar";
import getCharacters from "../domains/getCharacters";
import CharacterListItem from "../components/CharacterListItem";


type Character = {
    id: number;
    name: string;
    image: string;
    url: string;
};

// @ts-ignore
const HomePage = ({navigation}) => {
    const [characters, setCharacters] = React.useState<Array<Character>>([]);
    const [page, setPage] = React.useState(1);
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        let cancel = false;
        getCharacters(search, page)
            .then(data => {
                if (!cancel) {
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
                    onChangeText={str => {
                        setSearch(str), setPage(1), setCharacters([]);
                    }}
                />
                <FlatList
                    style={styles.flatList}
                    onEndReached={() => {
                        {setPage(page + 1)}
                    }}
                    onEndReachedThreshold={0.5}
                    data={characters}
                    renderItem={({item}: { item: Character }) => (
                        <CharacterListItem
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
});

export default HomePage;
