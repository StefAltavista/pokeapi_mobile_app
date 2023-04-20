import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    NativeSyntheticEvent,
    TextInputChangeEventData,
} from "react-native";

const Searchbar = ({ getPokemon }: { getPokemon: Function }): JSX.Element => {
    const [input, setInput] = useState("");

    return (
        <View style={styles.searchbar}>
            <Text>Search:</Text>
            <TextInput
                style={styles.textInput}
                value={input}
                onChange={(
                    e: NativeSyntheticEvent<TextInputChangeEventData>
                ): void => {
                    setInput(e.nativeEvent.text);
                }}
                onSubmitEditing={() => getPokemon(input)}
            ></TextInput>
        </View>
    );
};

const styles = StyleSheet.create({
    searchbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    textInput: {
        backgroundColor: "blue",
        color: "yellow",
        width: 120,
        height: 30,
        marginLeft: 10,
        borderRadius: 10,
    },
});
export default Searchbar;
