import * as React from 'react';

import {Button, Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Character = {
    id: number;
    name: string;
    image: string;
};
const {height, width} = Dimensions.get('window');
const itemWidth = (width - 50) / 2;
const itemHeight = (height) / 4;

export type CharacterListProps = {
    character: Character;
    onBtnDetailClick: () => void;
}

const CharacterList: React.FC<CharacterListProps> = CharacterListProps => {
    return (
        <TouchableOpacity onPress={CharacterListProps.onBtnDetailClick}>
            <View style={styles.item}>
                <Image style={styles.img} source={{uri: CharacterListProps.character.image}}/>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>{CharacterListProps.character.name}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    item: {
        marginVertical: 4,
        marginHorizontal: 8,
        width: itemWidth,
        height: itemHeight
    },
    titleContainer: {
        backgroundColor: '#222222',
        padding: 10,
        opacity: 0.75,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    },
    title: {
        fontSize: 12,
        alignSelf: 'center',
        color: '#FFFFFF'
    },
    img: {
        width: itemWidth,
        height: itemHeight,
        borderRadius: 4
    },
});

export default CharacterList;
