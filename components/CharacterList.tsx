import * as React from 'react';

import {FlatList, StyleSheet} from 'react-native';
import CharacterListItem from "./CharacterListItem";

type Character = {
    id: number;
    name: string;
    image: string;
    url: string;
};

export type CharacterListProps = {
    characters: Character[];
    onEndReached: void;
}

// @ts-ignore
const CharacterList: React.FC<CharacterListProps> = ({navigation}, props) => {
    return (
        <FlatList
            style={styles.flatList}
            onEndReached={() => {
                props.onEndReached
            }}
            onEndReachedThreshold={0.5}
            data={props.characters}
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
    );
}

const styles = StyleSheet.create({
    flatList: {
        margin: 10,
    },
});

export default CharacterList;
