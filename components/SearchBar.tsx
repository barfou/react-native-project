import * as React from 'react';

import {StyleSheet, TextInput, View} from 'react-native';

export type SearchBarProps = {
    onChangeText: (str: string) => void;
}

const CharacterList: React.FC<SearchBarProps> = SearchBarProps => {
    return (
        <View style={styles.itemCointainer}>
            <TextInput style={styles.searchBar} onChangeText={SearchBarProps.onChangeText} inlineImageLeft="search" inlineImagePadding={10}/>
        </View>
    );
}

const styles = StyleSheet.create({
    itemCointainer: {
        marginVertical: 4,
        marginHorizontal: 8,
    },
    searchBar: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        paddingHorizontal: 10
    }
});

export default CharacterList;
