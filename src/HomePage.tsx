import * as React from "react";
import {Button, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View, ToastAndroid} from "react-native";
import getCharacters from "../domains/getCharacters";
import CharacterList from "../components/CharacterList";


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

    React.useEffect(() => {
        getCharacters(page)
            .then(data => {
                setCharacters(characters?.concat(data.results));
            })
    }, [page]);

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
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
    )
        ;
};

const styles = StyleSheet.create({
    flatList: {
        margin: 10
    }
});

export default HomePage;
