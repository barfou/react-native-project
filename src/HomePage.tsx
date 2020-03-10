import * as React from "react";
import {
    Button,
    FlatList,
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    ToastAndroid,
    Dimensions
} from "react-native";
//import getCharacters from "../domains/getCharacters";
import CharacterList from "../components/CharacterList";
import SearchBar from "../components/SearchBar";
import getCharactersSearch from "../domains/getCharactersSearch";


type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    created: string;
};

const HomePage = ({navigation}) => {
    const [characters, setCharacters] = React.useState<Array<Character>>([]);
    const [page, setPage] = React.useState(1);
    const [search, setSearch] = React.useState('');
    //const [loading, setLoading] = React.useState(false)

    React.useEffect(() => {
        let cancel = false
        //setLoading(true)
        getCharactersSearch(search, page)
            .then(data => {
                if (!cancel) {
                    setCharacters(characters?.concat(data.results));
                    //setLoading(false)
                }
            })
        return () => {
            cancel = true
        }
    }, [search, page]);

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView style={styles.background}>
                <SearchBar
                    onChangeText={str => {
                        setSearch(str), setPage(1), setCharacters([]);
                    }}
                />
                <FlatList
                    style={styles.flatList}
                    onEndReached={() => {
                        setPage(page + 1)
                    }}
                    onEndReachedThreshold={0.5}
                    data={characters}
                    renderItem={({item}: { item: Character }) => (
                        <CharacterList character={item} onBtnDetailClick={() => {
                            /* 1. Navigate to the Details route with params */
                            navigation.navigate('Details', {
                                itemId: `${item.id}`
                            });
                        }}/>
                    )}
                    numColumns={2}
                    horizontal={false}
                />
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({
    flatList: {
        margin: 10,
    },
    background: {
        backgroundColor: '#202329',
        flex: 1,
    }
});

export default HomePage;
