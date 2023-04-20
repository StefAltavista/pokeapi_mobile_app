import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Searchbar from "./components/Searchbar";
import List from "./components/List";
import DetailModal from "./components/DetailModal";

export default function App() {
    const [pokemon, setPokemon] = useState<string>("");

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.header}>
                <Text>POKEMONS</Text>
                <Searchbar getPokemon={(name: string) => setPokemon(name)} />
            </View>
            <List />
            {pokemon && (
                <DetailModal
                    name={pokemon}
                    closeModal={() => setPokemon("")}
                ></DetailModal>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: "10%",
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "stretch",
    },
});
