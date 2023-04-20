import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import main from "../graphQL/pokemonDetails";

const DetailModal = ({
    name,
    closeModal,
}: {
    name: string;
    closeModal: Function;
}) => {
    const [pokemon, setPokemon] = useState<any>();
    const [errors, setErrors] = useState(false);

    const getPokemon = async () => {
        try {
            const { data, errors } = await main(name);
            errors ? setErrors(true) : setPokemon(data.pokemon_v2_pokemon[0]);
            console.log(data);
        } catch (errors) {
            setErrors(true);
        }
    };
    useEffect(() => {
        getPokemon();
    }, []);

    return (
        <View style={styles.pokemonCard}>
            <TouchableOpacity onPress={() => closeModal()}>
                <Text style={styles.close}>X</Text>
            </TouchableOpacity>

            {pokemon && (
                <>
                    <Text>{pokemon.name}</Text>
                    <Image
                        style={styles.image}
                        source={{
                            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`,
                        }}
                    />
                    <Text>Weight: {pokemon.weight}</Text>
                    <Text>
                        Stats:{" "}
                        {
                            pokemon.pokemon_v2_pokemonstats[0].pokemon_v2_stat
                                .name
                        }{" "}
                        {
                            pokemon.pokemon_v2_pokemonstats[0].pokemon_v2_stat
                                .game_index
                        }
                        /{" "}
                        {
                            pokemon.pokemon_v2_pokemonstats[1].pokemon_v2_stat
                                .name
                        }{" "}
                        {
                            pokemon.pokemon_v2_pokemonstats[1].pokemon_v2_stat
                                .game_index
                        }
                        /{" "}
                        {
                            pokemon.pokemon_v2_pokemonstats[2].pokemon_v2_stat
                                .name
                        }{" "}
                        {
                            pokemon.pokemon_v2_pokemonstats[2].pokemon_v2_stat
                                .game_index
                        }
                    </Text>
                    <Text>
                        Moves:{" "}
                        {
                            pokemon.pokemon_v2_pokemonmoves[0].pokemon_v2_move
                                .name
                        }{" "}
                        /{" "}
                        {
                            pokemon.pokemon_v2_pokemonmoves[1].pokemon_v2_move
                                .name
                        }{" "}
                        /{" "}
                        {
                            pokemon.pokemon_v2_pokemonmoves[2].pokemon_v2_move
                                .name
                        }
                    </Text>
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    pokemonCard: {
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "gold",
        width: "100%",
        height: "100%",
    },
    image: { width: 100, height: 100 },
    close: { textAlign: "right" },
});

export default DetailModal;
