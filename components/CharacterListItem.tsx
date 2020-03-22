import * as React from 'react';

import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

type Character = {
    id: number;
    name: string;
    image: string;
};
const {height, width} = Dimensions.get('window');
const itemWidth = (width - 50) / 2;
const itemHeight = (height) / 4;

export type CharacterListItemProps = {
    character: Character;
    onItemClick: () => void;
}

const CharacterListItem: React.FC<CharacterListItemProps> = props => {
    return (
        <TouchableOpacity style={styles.item} onPress={props.onItemClick} >
            <Image style={styles.img} source={{uri: props.character.image}}/>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>{props.character.name}</Text>
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
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
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
        borderRadius: 8
    },
});

export default CharacterListItem;
