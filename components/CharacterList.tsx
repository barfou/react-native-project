import * as React from 'react';

import {Button, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Character = {
    id: number;
    name: string;
    image: string;
};

export type CharacterListProps = {
    character: Character;
    onBtnDetailClick: () => void;
}

const CharacterList: React.FC<CharacterListProps> = CharacterListProps => {
    return (
        <TouchableOpacity onPress={CharacterListProps.onBtnDetailClick}>
            <View style={styles.item}>
                <Image style={{width: 50, height: 50}} source={{uri: CharacterListProps.character.image}}/>
                <Text style={styles.title}>{CharacterListProps.character.name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#e9e9e9',
        padding: 10,
        marginVertical: 4,
        marginHorizontal: 8,
      flexDirection: 'row',
      flex: 1,
    },
    title: {
        fontSize: 12,
        alignSelf: 'center',
        marginStart: 10,
    },
});

export default CharacterList;
