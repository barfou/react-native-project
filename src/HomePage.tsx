import * as React from "react";
import {Button, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, View, ToastAndroid} from "react-native";
import getCharacters from "../domains/getCharacters";
import CharacterList from "../components/CharacterList";


type Info = {
    count: number;
    pages: number;
    next: string;
    prev: string;
};

type Character = {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    image: string;
    created: string;
};

type Characters = {
    info: Info;
    results: Array<Character>;
};

const HomePage = ({navigation}) => {
    const [characters, setCharacters] = React.useState<Characters>();
    const [page, setPage] = React.useState(1);

    React.useEffect(() => {
        getCharacters(page)
            .then(data => {
                setCharacters(data);
            })
    }, [page]);

    return (
        <>
            <StatusBar barStyle="dark-content"/>
            <SafeAreaView>
                <FlatList
                    onEndReached={() => {
                        setPage(page + 1)
                    }}
                    onEndReachedThreshold={0.1}
                    data={characters?.results}
                    renderItem={({item}: { item: Character }) => (
                        <CharacterList character={item} onBtnDetailClick={() => {
                            /* 1. Navigate to the Details route with params */
                            navigation.navigate('Details', {
                                itemId: `${item.id}`
                            });
                        }}/>
                    )}

                />
            </SafeAreaView>
        </>
    )
        ;
};

export default HomePage;
